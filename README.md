# MatTable - An example of how to use the Angular Material mat-table component

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

1. Online reference: <https://material.angular.io/components/table/overview>

## Kanban task: Basic use of ```<table mat-table>```

### Task: Add Angular Material, share and core modules

## Note: **MaterialModule must be in each feature module and restart app to see the effect**

1. Run: ```ng add @angular/material```
2. Ref: <https://material.angular.io/guide/getting-started>
3. Add material module
4. Add core and share module folders
5. Add flex layout
6. Code ref: <http://github.com/foxgeoff/ai-client2020-rev3>
7. Material Design: <https://material.io/components/buttons#usage>

### Use of folders core and shared

```Javascript
/**
 * CORE MODULE
 * Core folder should contain singleton
 * services shared throughout app
 *
 * Services that are specific to a feature can
 * go in the feature's folder
 *
 * Example: LoggingService, ErrorService,
 * DataSerice
 */

/**
 * SHARED MODULE: Reusable components, pipes and directives
 *
 * Shared folder should contain reusable
 * components, pipes and directives
 *
 * Example: CalendarComponent,
 * AutoCompleteComponent
 */
```

### Task: FIX THIS ERROR

## Note: **TSLint Error is fixed by moving to ESLint as described in the readme file**

```Javascript
Not using the local TSLint version found for 'c:/Users/foxge/Github/mat-table/src/app/app.module.ts'
To enable code execution from the current workspace you must enable workspace library execution.
```

1. SOLUTION: <https://stackoverflow.com/questions/65228384/tslint-extension-throwing-errors-in-my-angular-application-running-in-visual-stu>
2. Basic answer: we no longer use TSLint, use ESLint instead
3. Solution: <https://code.visualstudio.com/api/advanced-topics/tslint-eslint-migration#eslint-installation>
4. Step #1 Allow Typescript to understan ESLint, run: ```npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin```
5. Step #2 Now, to make the actual migration simpler, run the tslint-to-eslint-config utility. ```npx tslint-to-eslint-config``

```Typescript
/* result */
✨ 91 rules replaced with their ESLint equivalents. ✨

❗ 8 ESLint rules behave differently from their TSLint counterparts ❗
  Check ./tslint-to-eslint-config.log for details.

❓ 2 rules are not known by tslint-to-eslint-config to have ESLint equivalents. ❓
  The "@typescript-eslint/tslint/config" section of ./.eslintrc.js configures eslint-plugin-tslint to run them in TSLint within ESLint.
  Check ./tslint-to-eslint-config.log for details.

☠ Prettier plugins are missing from your configuration. ☠
  We highly recommend running tslint-to-eslint-config --prettier to disable formatting ESLint rules.
  See https://github.com/typescript-eslint/tslint-to-eslint-config/blob/master/docs/FAQs.md#should-i-use-prettier.

⚡ 9 new packages are required for this ESLint configuration. ⚡
  npm install @angular-eslint/eslint-plugin @angular-eslint/eslint-plugin-template @typescript-eslint/eslint-plugin @typescript-eslint/eslint-plugin-tslint @typescript-eslint/parser eslint eslint-plugin-import eslint-plugin-jsdoc eslint-plugin-prefer-arrow --save-dev

♻ Consider using --comments to replace TSLint comment directives in your source files. ♻

✅ All is well! ✅
```

### Task: ESLint: Run (failed)

1. Ref <https://code.visualstudio.com/api/advanced-topics/tslint-eslint-migration#eslint-run>
2. Add to package.json: ```"lint": "eslint -c .eslintrc.js --ext .ts <mySrcFolder>"``` in scripts section
3. Run ```eslint -c .eslintrc.js --ext .ts <mySrcFolder>```

### Task: Add prettier, plugin and config

1. Run```npm install --save-dev prettier```
2. Run```npm install --save-dev eslint-config-prettier```
3. Add to scripts/ package.json ```"eslint": "eslint ."```// this will run eslint on all files
4. Add plugin: To install, run ```npm install --save-dev eslint-plugin-prettier```
5. Now run ```npm run eslint```

### **RUN THIS TO FIX ERRORS** Ref how to: <https://pakatagoh.com/blog/setting-up-eslint-and-prettier-with-vs-code-in-2019>

### Task: **Run ESLint Temp Fix**

1. Ref: <https://stackoverflow.com/questions/65228384/tslint-extension-throwing-errors-in-my-angular-application-running-in-visual-stu>

```typescript

Like @Tuấn Nguyễn described, you need to:

    Go to Command Palette by pressing Ctrl + Shift + P,

    In the input that pops up at the top of the VS Code, start typing

    TSLint: Manage workspace library execution"

    and hit Enter key.

    From the menu that replaces the input, pick enable workspace library execution and again press Enter key.

```

### Task: Add <https://github.com/angular/flex-layout>

### **DO RUN THIS - flex-layout must match cli rev**

1. Run```npm install @angular/flex-layout@^9.0.0-beta.30 --save```
2. Add FlexLayoutModule to app.module.ts
3. Ref: <https://stackblitz.com/edit/flex-layout-material-seed?file=package.json>
4. Ref: <https://github.com/angular/flex-layout>

### Task: Getting started

1. Ref: <https://v7.material.angular.io/components/table/overview#getting-started>

```Javascript
/**
 *  NEW PROJECT APP: TIME SHEET FOR FOXGRAPHICS 12-31-2020
 */

## Task: FUNCTIONAL REQUIREMENTS ver1.1

### Employee page to allow entry of times on the job

1. Provide a "Punch In" and "Punch Out" Method
2. Using actual real time or manual time
3. Report daily hours for the employee

### Admin page to control employee use of app

1. Add / Delete employees
2. Report daily hours for each employee
2. Report weekly hours for each employee

### Server API:

1. EmployeeWorkDone Table: id, employeeId, hours, jobId, startTime, endTime  
2. EmployeeWorkAssigned Table: id, employeeId, hours, jobId, startTime, endTime
2. EmployeeDetails Table: id, companyDetailsId, firstName, lastName, email, phone, isActiveAtCompany
3. JobsDetails Table: id, employeeWorkAssignedId, name, estimatedHours, workedHours, 
4. JobTasks Table: id, jobDetailsId, name, estimatedHours, employeeId
5. SupervisorDetails Table: id, companyDetailsId, firstName, lastName, email, phone
6. CompanyDetails Table: id, companyCalanderId, name, address, city, state, zipcode
7. CompanyCalander Table: id dayOfWeek, month, date, year
```

### Task: Add in memory set of data

1. Ref Code Project: github/my-fitness
