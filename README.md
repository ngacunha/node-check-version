# Node Check Version Package

### This package makes a quick check that the version of the node being run is the same as the version defined by the project.
&nbsp; 
 
-----
## **How to use**?

### npm:
```bash
npm install node-check-version
```

### yarn:
```bash
npm install node-check-version
```

### Create nodeVersion.json file in the project root:
```js
{
  "version": "14.17.3",
  "type": "warning"
}
```
### **Properties:**

| Property | Default | Options           | Required | Description                                                     |
|----------|---------|-------------------|----------|-----------------------------------------------------------------|
| version  | -       | all node versions | yes      | this property defines the nodejs version to run on this project |
| type     | warning | warning or error  | no       | this property defines the type of message to be displayed       |

### import the package into your main file:

index.js
```js
//require('node-check-version')
import 'node-check-version'

...
```

---

## **Result when a Node version conflict occurs:**

### **type: "error":**
![gif como funciona o processo de commit](https://i.ibb.co/DfMVYGx/error.png)

### **type: "warning":**
![gif como funciona o processo de commit](https://i.ibb.co/bXttDPN/warning.png)

---
## **everything is ready**