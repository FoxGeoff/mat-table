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
6. Code ref: <http://github.com/foxgeoff/ai-client2020-rev3>

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
