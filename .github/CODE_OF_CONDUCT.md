
#  Coding Conventions
The Naming Convention Project is an effort to identify, collect and maintain a set of guidelines for best naming practices.


##  Table Of Contents (TOC)
  - [Variables](#variables)
    + [Booleans](#booleans)
    + [Constants](#constants)
    
  - [Functions](#functions)

  - [Components](#components)
    + [Components Files](#components-files)
      - [Smart vs Dumb Components Naming](#smart-vs-dumb-components-naming)
      - [Dumb components](#dumb-components)
      - [Smart components](#smart-components)
    + [Single Instance Components](#single-instance-components)
    + [Templates components](#templates-components)
       
  - [Computed](#computed)

  - [Props](#props)

  - [Emits](#emits)
  
  - [Basic Template Sample](#basic-template-sample)

  * [Template expressions](#template-expressions)
  
  * [Directive shorthand](#directive-shorthand)
  
  * [Classes](#classes)

  * [Methods](#methods)

  * [Private Functions](#private-functions)

  * [Interfaces](#interfaces)

  * [Types](#types)

  * [Namespaces](#namespaces)

  * [Enums](#enums)

  * [Null vs. Undefined](#null-vs-undefined)
  
  * [Global Variables](#global-variables)
  
  * [Files](#files)
  
  * [CSS](#css)
  
  * [Git](#git)


## Variables

#### camelCase
JavaScript variable names are case-sensitive. Lowercase and uppercase letters are distinct.

- Begin with a lowercase e.g. id, "name".
- If multiple words: start it with the lowercase letter followed by an uppercase letter e.g. "lastName", "phoneNumber"
- **Avoid** using **underscore** or **dash**
- **Avoid** one-character variables e.g. a, b
- **Cannot** start with a **number**

``` js  
// bad 
const dogname =  'Droopy';
// bad 
const dog_name =  'Droopy';
// bad 
const DOGNAME =  ‘Droopy’;
// bad 
const DOG_NAME =  'Droopy';
// good
 const dogName =  'Droopy'
```

The names of variables should be **self-explanatory** and **describe the stored value**. For example, if you need a variable to store a dog’s name, you should use dogName instead of just Name since it is more meaningful.

 ``` js
// bad 
const d =  'Scooby-Doo';
// bad
const name = 'Scooby-Doo';
// good
const dogName =  'Scooby-Doo';
```

### Booleans

#### camelCase
When it comes to Boolean variables, we should use  **is**  or  **has** as prefixes. For example, if you need a Boolean variable to check if a dog has an owner, you should use hasOwner as the variable name.

 ``` js
// bad
const bark =  false;
// good
const isBark =  false;
// bad
const ideal =  true;
// good
const areIdeal =  true;
// bad
const owner =  true;
// good
const hasOwner =  true;
```

### Constants

#### SCREAMING_SNAKE_CASE
JavaScript constants are also case-sensitive. However, these constants should be written in **uppercase** because they are nonchanging variables.
- Should be **all uppercase letters** e.g. MAX_NUMBER_PEOPLE, PRICE
- It may contain digits but **not** as the first letter

``` js
const LEG =  4;
const TAIL =  1;
const MOVABLE = LEG + TAIL;
```
- If the variable declaration name contains more than one word, you should use **SCREAMING_SNAKE_CASE**
``` js
const MAX_NUMBER_PEOPLE = 42
```

## Functions

#### camelCase
you should use **descriptive nouns and verbs as prefixes**. For example, if we declare a function to retrieve a name, the function name should be getName.
  ``` js 
// bad
	function name(dogName, ownerName) { 
		return '${dogName} ${ownerName}';
	} 
	
// good 
	function getName(dogName, ownerName) {
		return '${dogName} ${ownerName}';
	}
```

## Components

#### PascalCase
JavaScript components are widely used in front-end frameworks like Vue. Although components are used in the DOM, treating them similarly to classes and using **Pascal case** to define names is required.

- Begin with an **uppercase** letter
- Components names should always be **multiwords** like "AlertModal", "DropdownMenu" or "NavbarLogo"
- Child components should use the name of **their parent** as a **preffix**. For example a Form component child of "AlertModal" should be called "AlertModalForm"
- **Avoid** acronyms and abbreviations


### Components Files

- Begin with an **uppercase letter** (PascalCase)
- **One component** per file only
- The file extension should be .vue or .js

#### Smart vs Dumb Components
**Smart components** sometimes called container are the one that **handles state** changes.
**Dumb components**, also called presentational, **handles the look and feel**. Dumb components are comparable to the View and Smart component to the Controller in the MVC pattern.

#### Dumb components
- Starts with the **prefix " V "**
- For example "VButton" for a simple button
- Takes **only** care of the **look and feel**

#### Smart components
- Takes the name of a dumb component but **replace the prefix ( " V " ) with another name**
- For example "SubmitButton", "UserDeleteButton", "IncrementButton"
- Takes **only care of the look and feel**
- Implements methods or **are connected with the Store Mutations**

### Single Instance Components
Single Instance components are the ones **that are used only once per view**. For example the logo, the navbar, the side menu.

- Start with **The**
- Should be used only **once** per view
- For example TheNavbar, TheFooter, TheSideMenu, TheLogo

### Templates components
##### PascalCase
- **In single-file components**, **string templates**
- **Should** be self closing
- For example "`<HelloWorld/>`, `</ShareButton>`"

##### kebab-case
- In **DOM** templates
- Should **never** be self closing
- For example:  ``` </HelloWorld>  ```,  ``` </share-button> ```
```js
<template>
  <div>
    <HelloWorld/>
    <share-button></share-button>
  </div>
</template>
```

## Computed

#### camelCase
- If the function is using for creating  **css class** it should be suffix by the word **class**
- Preferably a verb e.g. "getName()", "buy()", "count()"


## Props

#### camelCase in *declaration*
#### kebab-case in *templates*
Props naming convention is similar as the Variables naming convention


Like : 
``` html
<template>
  <PopupWindow greeting-message="hello world" />
</template>
<script>
defineProps({
  greetingMessage: String
})
</script>
```

## Emits
#### kebab-case
 > Reason: This is because in the parent component, that’s the same syntax we use to listen to that event.
So for consistency across our components, and to make your code more readable, stick to using kebab-case in both places.

Example:

##### PopupWindow.vue
``` js
<script setup>
const emit = defineEmits(['close-window'])

function buttonClick() {
  emit('close-window')
}
</script>
```

##### ParentComponent.vue
``` html
<template>
    <popup-window @close-window='handleEvent()' />
</template>
```
## Basic Template Sample

It is required to follow this template sample when creating a ".vue" file: 
``` html
<script>
</script>

<template>
	<div>test text</div>	  
</template>

<style>
</style>
```

## Template expressions

**BAD :** 
``` html
<template>
  {{
    fullName
      .split(' ')
      .map(function (word) {
        return word[0].toUpperCase() + word.slice(1)
      })
      .join(' ')
  }}
</template>
```


**GOOD :** 

``` html
<script setup>
import { computed } from 'vue'
export default {
 // The complex expression has been moved to a computed property
const normalizedFullName = computed(() => {
  return this.fullName
        .split(' ')
        .map(function (word) {
          return word[0].toUpperCase() + word.slice(1)
        })
        .join(' ')
    },
})
</script>

<template>{{ normalizedFullName }}</template>
```
## Directive shorthand
we should be consistent with directive shorthand : 
- **' @ '** is short for **v-on**
- **' : '** is short for **v-bind**
- **' # '** is short for **v-slot**




## Classes

### Pascal case
Naming convention rules for JavaScript classes are pretty similar to functions. We have to use descriptive titles that explain the class’s capabilities.
The major difference between function and class names is that we have to use  **Pascal case**  for class names.
``` js
  
class  DogCartoon  { 
	constructor(dogName, ownerName)  { 
	this.dogName = dogName;  this.ownerName = ownerName; 
	} 
} 
	var cartoon =  new  DogCartoon('Scooby-Doo',  'Shaggy');
```

## Methods

#### camelCase
Although there are some differences, the structure of a JavaScript function and a method are pretty similar. So, naming convention rules are the same.
``` js
  
class  DogCartoon  {
	constructor(dogName, ownerName)  { 
	this.dogName = dogName;  this.ownerName = ownerName; 
	}
	getName()  {
	 return  '${this.dogName} ${this.ownerName}'; 
	}
} 
	const cartoon=  new  DogCartoon('Scooby-Doo',  'Shaggy');
	console.log(cartoon.getName());  // "Scooby-Doo Shaggy"
```
## Private Functions

#### _camelCase
Underscores ( _ ) are widely used in languages like MySQL and PHP to define variables, functions, and methods. But in JavaScript, an underscore is used to denote private variables or functions.

For example, if you have a private function name like toonName, you should denote it as a private function by adding an underscore as a prefix (_toonName).

``` js
class DogCartoon  { 
	constructor(dogName, ownerName)  {
	this.dogName = dogName; 
	this.ownerName = ownerName; 
	this.name = _toonName(dogName, ownerName); 
	}
	_toonName(dogName, ownerName)  {
		return `${dogName} ${ownerName}`; 
	}
}
const cartoon =  new  DodCartoon('Scooby-Doo',  'Shaggy'); 

// good 
const name = cartoon.name;
console.log(name);  // "Scooby-Doo Shaggy"

// bad
name =cartoon._toonName(cartoon.dogName, cartoon.ownerName);
console.log(name);  // "Scooby-Doo Shaggy"
```
## Interfaces

####  PascalCase  for *name*
####  camelCase for *members*
Interface naming convention is similar as the Class naming convention

- **Don't** prefix with `I`
> Reason: Unconventional. `lib.d.ts` defines important interfaces without an `I` (e.g. Window, Document etc).

Bad:
``` js 
interface  IFoo  {
	InterfaceVariable: string
}
```
Good:
``` js 
interface  Foo  {
	interfaceVariable: string
}
```

## Types

####  PascalCase  for *name*
####  camelCase for *members*
Type naming convention is similar as the Class naming convention


Bad:
``` js 
namespace  foo {
}
```
Good:
``` js 
namespace Foo {
}
```

## Namespaces

####  PascalCase
> Reason: Convention followed by the TypeScript team. Namespaces are effectively just a class with static members. Class names are `PascalCase` => Namespace names are `PascalCase`


## Enums

####  PascalCase
> Reason: Similar to Class

Bad :
``` js 
enum color {
}
```
Good :
``` js 
enum Color {
}
```
Use `PascalCase` also for enum member

> Reason: Convention followed by TypeScript team i.e. the language creators e.g `SyntaxKind.StringLiteral`. Also helps with translation (code generation) of other languages into TypeScript.

Bad :
``` js 
enum  color {
	 red
}
```
Good :
``` js 
enum Color {
	Red
}
```

## Null vs. Undefined

Prefer not to use either for explicit unavailability
>Reason: these values are commonly used to keep a consistent structure between values. In TypeScript you use _types_ to denote the structure

Bad :
``` js 
let foo = { x: 123, y: undefined };
```
Good :
``` js 
let foo: { x: number, y?: number } = { x:123 };
```

Use `undefined` in general (do consider returning an object like `{valid:boolean, value?:Foo}` instead)

Bad :
``` js 
	return  null;
```
Good :
``` js 
	return  undefined;
```

Use `null` where it's a part of the API or conventional
> Reason: It is conventional in Node.js e.g. `error` is `null` for NodeBack style callbacks.

Bad :
``` js 
	cb(undefined)
```
Good :
``` js 
	cb(null)
```
Use _truthy_ check for **objects** being `null` or `undefined`
Bad :
``` js 
	if (error ===  null)
```
Good :
``` js 
	if (error)
```

## Global Variables

For global JavaScript variables, there are no specific naming standards.
It is required to use  **camel case**  for  **mutable**  global variables and  **uppercase** for **immutable** global variables.

## Files
Most web servers (Apache, Unix) are case-sensitive when it comes to handling files. For example,  **_flower.jpg_**  isn’t  **_Flower.jpg_**.

On the other hand, web servers, such as Microsoft’s IIS, do not care about the case. In such servers, you can use  **_Flower.jpg_**  or  **_flower.jpg_**  to access  **_Flower.jpg_**.

However, if you switch from a case-insensitive server to a case-sensitive server, even a tiny mistake can cause your website to crash.

So, it is required to use  **lowercase**  file names in all servers despite their case-sensitive support (except components).

## CSS

We use **BEM** naming convention for our css class names
BEM is a convention that attempts to divide the overall user interface into small reusable components.**The abbreviation BEM stands for Block‑Element‑Modifier.**
-   **Block:**  encapsulates a standalone entity that is meaningful on its own.
-   **Element:**  parts of a block that have no standalone meaning.
-   **Modifier:**  flags on blocks or elements.
``` css
block__element--modifier
```

In this case, the class name starts with the block name, followed by the element, which has two underscores prefixed, and finally, the modifier, which has two dashes prefixed.

Example : 

``` css
.house__wall--brown {
    position: absolute;
    width: 370px;
    height: 200px;
    border: 2px solid black;
    background: sienna;
    left: 65px;
    top: 193px;
}
```

Read this two Articles to get more familiar with BEM naming convention : [One](https://www.scaler.com/topics/css-class-naming-convention/) , [Two](https://www.freecodecamp.org/news/css-naming-conventions-that-will-save-you-hours-of-debugging-35cea737d849/)

## Git


### Branch name
We are talking about branches that are disposable that can be created and deleted by need of the developer or deployer.

-   **Feature**
    
    Any code changes for a new module or use case should be done on a feature branch. This branch is created based on the current development branch. When all changes are  **Done**, a Pull Request/Merge Request is needed to put all of these to the development branch.
    
    Examples:
    
    -   feature/integrate-swagger
    -   feature/JIRA-1234
    -   feature/JIRA-1234_support-dark-theme
>  use all lower caps letters and hyphen (-) to separate words unless it is a specific item name or ID. Underscore (_) could be used to separate the ID and description.

-   **Bug Fix**
    
    If the code changes made from the feature branch were rejected after a release, sprint or demo, any necessary fixes after that should be done on the bugfix branch.
    
    Examples:
    
    -   bugfix/more-gray-shades
    -   bugfix/JIRA-1444_gray-on-blur-fix

-   **Hot Fix**
    
    If there is a need to fix a blocker, do a temporary patch, apply a critical framework or configuration change that should be handled immediately, it should be created as a Hotfix. It does not follow the scheduled integration of code and could be merged directly to the production branch, then on the development branch later.
    
    Examples:
    
    -   hotfix/disable-endpoint-zero-day-exploit
    -   hotfix/increase-scaling-threshold
    
-   **Experimental**
    
    Any new feature or idea that is not part of a release or a sprint. A branch for playing around.
 
    Examples:
    
    -   experimental/dark-theme-support

-   **Enhancement**
    
    A branch that neither fixesa bug nor adds a feature.
 
    Examples:
    
    -   enhancement/project-structure

-   **Build**
    
    A branch specifically for creating specific build artifacts or for doing code coverage runs.
    
    Examples:
    
    -   build/jacoco-metric

-   **Release**
    
    A branch for tagging a specific release version
    
    Examples:
    
    -   release/myapp-1.01.123

    
-   **Merging**
    
    A temporary branch for resolving merge conflicts, usually between the latest development and a feature or Hotfix branch. This can also be used if two branches of a feature being worked on by multiple developers need to be merged, verified and finalized.
    
    Examples:
    
    -   merge/dev_lombok-refactoring
    -   merge/combined-device-support

### Commit message

A commit message should start with a category of change. A typical git commit message will look like : 
``` bash
<type>(<scope>): <subject>
```
**"type" must be one of the following mentioned below!**

-   `build`: Build related changes (eg: npm related/ adding external dependencies)
-   `chore`: A code change that external user won't see (eg: change to .gitignore file or .prettierrc file)
-   `feat`: A new feature
-   `fix`: A bug fix
-   `docs`: Documentation related changes
-   `refactor`: A code that neither fix bug nor adds a feature. (eg: You can use this when there is semantic changes like renaming a variable/ function name)
-   `perf`: A code that improves performance
-   `style`: A code that is related to styling
-   `test`: Adding new test or making changes to existing test

**Scope  :**
must be noun and it represents the section of the section of the codebase

**subject :**
-   use imperative, present tense (eg: use "add" instead of "added" or "adds")
-   don't use dot(.) at end
-   don't capitalize first letter

```
fix(middleware): ensure Range headers adhere more closely to RFC 2616
```

> **Commitizen** is a vscode extension that makes adding commit messages more efficient and standard
