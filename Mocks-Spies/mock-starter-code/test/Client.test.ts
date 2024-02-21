import { Client } from "../src/Client";
import { Service } from "../src/Service";

describe("m4 integrated test", () => {
  let mockService: Service;
  let mockServiceInstance: Service;
  let client: Client;
  let spyClientInstance: Client;

  /**
   * This function is run before each test. We can use it to set up our mock objects with Mockito.
   */
  beforeEach(() => {
    // TODO: Mock the Service class here instead of calling new
    mockService = new Service();

    // TODO: Create the mockServiceInstance as an instance of the mockService

    client = new Client();

    // TODO: Create the spy for the client.

    // TODO: Create the spyClientInstance as an instance of the client spy

    // TODO: Use the ts-mokito when/thenReturn to tell the spyClient (not the client) to return the instance of the mock service when the factory method is called
  });

  /**
   * This is supposed to test whether the code in the Client is correct. The Client code is correct,
   *     but the Service has a bug that causes this test to fail. Using Mockito we can test the Client
   *     without also testing the Service
   */
  it("testConvertValue", () => {
    const expected: string = "70";

    // TODO: Use ts-mockito when/thenReturn to tell the mock service (not the instance of the mock service) to return 2 for input 35 when it's getDecimalDigitCount(int) method is called

    // TODO: Change this to use the spyClientInstance
    const actual: string = client.convertValue(35);

    expect(actual).toBe(expected);
  });

  /**
   * This test passes, but it doesn't actually test anything. We have no assurance
   *     that the Client's code is correct, since the function has no return value for us to
   *     check. However, we can use Mockito to check the parameters passed to the Service
   *     in order to see whether the Client has correct code.
   */
  it("testCreateFormattedStringsWithAnswer", () => {
    // TODO: Use ts-mockito when/thenCall to call a function when the mockService.processList is called
    // TODO: Verify that the parameters passed to mockService.processList are not null. Do so in the thenCall function from the previous TODO.
    // Hint: Use ts-mockito anything() as the parameter to processList

    
    const input: string = "Have a nice day";

    // TODO: Change this to use the spyClientInstance
    client.createFormattedStrings(input);

    // TODO: use ts-mockito verify to ensure that mockService.processList is called
  });
});
