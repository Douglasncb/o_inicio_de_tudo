test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  expect(responseBody.update_at).toBeDefined();

  const parsedUpdateAt = new Date(responseBody.update_at).toISOString(); // Check if the date is valid
  expect(responseBody.update_at).toEqual(parsedUpdateAt); // Ensure the date is in ISO format

  expect(responseBody.dependecies.database.version).toEqual("16.0");
  expect(responseBody.dependecies.database.max_connections).toEqual(100);
  expect(responseBody.dependecies.database.opened_connections).toEqual(1);

  expect(responseBody).not.toHaveProperty("password"); // Ensure that sensitive information is not included in the response
  expect(responseBody).not.toHaveProperty("email");
  expect(responseBody).not.toHaveProperty("secret_ley");

  console.log(responseBody);
});
