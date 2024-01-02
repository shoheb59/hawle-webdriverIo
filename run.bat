REM Array of suites
set "suites = smoke upload three"

REM Loop through the array and run npm commands
for %%s in  (%suites%) do (
    call npm run %%s
     )

REM Generate and serve allure report
call npm run publish