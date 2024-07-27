# Node  

## Table Content  
- [Global node_modules directory](#global-node_modules-directory)  
- [Checking the Version of a Global Package](#checking-the-version-of-a-global-package)  
    - [Listing all global packages](#listing-all-global-packages)  
    - [Checking specific package version of a globally](#checking-specific-package-version-of-a-globally)  
- [Installing a single package](#installing-a-single-package)  
- [Updating packages](#updating-packages)  
- [Learn Node.js](#learn-nodejs)  
- [Working with folders in Node.js](#working-with-folders-in-nodejs)  

## Global node_modules directory  
Takes you to the directory where your globally installed npm packages are located. 
```bash
cd $(npm root -g)
```  

## Checking the Version of a Global Package  
To check the version of a globally installed package, you can use the following command:  

### Lists all global packages  
```bash
npm list -g
```  

**Abbreviation**  
```bash
npm ls -g
```  

### Checking specific package version of a globally
```bash
npm list -g <package-name>
```  

Replace `<package-name>` with the actual name of the package you want to check.  

**Example**  
```bash
npm list -g npm
```

**Abbreviation**  
```bash 
npm ls -g npm
```  

## Installing a single package  
```bash
npm install <package-name>
```  

## Updating packages  

Updating is also made easy, by running
```bash
npm update
```  

You can specify a single package to update as well:
```bash
npm update <package-name>
```  

## Learn Node.js  
- [Getting Started](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)  
- [File system](https://nodejs.org/api/fs.html)  
- [Path](https://nodejs.org/api/path.html)   

## [Working with folders in Node.js](https://nodejs.org/en/learn/manipulating-files/working-with-folders-in-nodejs)



