# MatTable - An example of how to use the Angular Material mat-table component

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

1. Online reference: <https://material.angular.io/components/table/overview>

## Kanban task: Basic use of ```<table mat-table>```

### Task: Add Angular Material, share and core modules

1. Run: ```ng add @angular/material```
2. Ref: <https://material.angular.io/guide/getting-started>
3. Add material module
4. Add core and share module folders
5. Add flex layout
6. Code ref: <http://github.com/foxgeoff/ai-client2020-rev3>.

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

```Javascript
Not using the local TSLint version found for 'c:/Users/foxge/Github/mat-table/src/app/app.module.ts'
To enable code execution from the current workspace you must enable workspace library execution.
```

1. SOLUTION: <https://stackoverflow.com/questions/65228384/tslint-extension-throwing-errors-in-my-angular-application-running-in-visual-stu>
2. Basic answer: we no longer use TSLint, use ESLint instead

### Task: Add <https://github.com/angular/flex-layout>

### **DO RUN THIS - flex-layout must match cli rev**

1. Run```npm install @angular/flex-layout@^9.0.0-beta.30 --save```
2. Add FlexLayoutModule to app.module.ts
3. Ref: <https://stackblitz.com/edit/flex-layout-material-seed?file=package.json>
4. Ref: <https://github.com/angular/flex-layout>

### Task: Getting started

1. Ref: <https://v7.material.angular.io/components/table/overview#getting-started>

```JAvascript
/**
 *  NEW PROJECT APP: TIME SHEET FOR FOXGRAPHICS 12-31-2020
 */

## Task: FUNCTIONAL REQUIREMENTS ver1

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
3. JobsDetails Table: id, name, estimatedHours, workedHours
4. JobTasks Table: id, jobDetailsId, name, estimatedHours, employeeId
5. SupervisorDetails Table: id, companyDetailsId, firstName, lastName, email, phone
6. CompanyDetails Table: id, companyCalanderId, name, address, city, state, zipcode
7. CompanyCalander Table: id dayOfWeek, month, date, year
