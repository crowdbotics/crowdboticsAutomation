**How can we setup and run locally?**

1. If you don’t have Visual Studio on your system, first we need to install it from this link: https://code.visualstudio.com/download.
   
2. If you don’t have git in your system, we need to install git from this link for Windows: https://git-scm.com/download/win; for Mac: https://git-scm.com/download/mac.
   
3. Copy the repository link: https://github.com/anishcb/crowdbotics_automation.git
Go to any location on your system where you want to store your project.

4. Open your git bash command.
   
5. Type the command Git clone https://github.com/anishcb/crowdbotics_automation.git and click the enter keyword.
   
6. Then check your system location to see where you want to store the project.
   
7. Open Visual Studio and click on the file option, which is available at the top of the IDE.
   
8. Select the Open Folder option.
   
9. Browser your project and open it in Visual Studio.
    
10. Open your terminal, which is available at the bottom of Visual Studio.
    
11. Install Cypress using this command: npm install cypress --save-dev.
    
12. Now your system is ready for coding.
    
13. If you want to run your project, you will use this command: npx cypress open.
    
14. Open your Cypress open screen, then select the E2E Testing Option.
    
15. Select the browser in which you want to execute.
    
16. Select your spec file so your test will automatically start.

    _______________________________________________________________________________________

  
**How can you run the code from GitHub actions?**

1. Open the test.yml file and change the run command. If you want to run smoke, enter the smoke command, then save it.
   
2. Push your code to your repository.
   
3. Go to the repository and select the Actions option.
   
4. Where you found your project is already running.
   
5. Click on the build option, and you can check your status.

   ________________________________________________________________________________________

**How can I check the report?**

1. Go to the terminal, which is available at the bottom of Visual Studio.
   
2. Type this command to generate the macho report. (Command is already available on the package.) json file).
   
3. Copy the macho report file path and paste it in the browser.
   
4. Click on the enter key.

____________________________________________________________________________________________

**How to Test API Endpoints with Different User Roles (e.g., Normal User, Sales User, Super User):**

1. Update Credentials in Fixture File:
First, go to the fixture file named api_for_different_user_login.json and update it with the username and password of the user role you want to test.
For example, if you're testing as a Normal User, enter the Normal User’s credentials in this file.

2. Run Tests Based on User Role Using Tags:
Once you've set the appropriate credentials, you can run the tests for that specific user role using tags.
For example, to run tests for the Normal User, use the following command:

**User Credentials**
**👤 Normal User**
Email: testnew.prd@crowdbotics.com

Password: Test@123456789

**💼 Sales User**
Email: vinay.sales@crowdbotics.com

Password: VinaySales@123