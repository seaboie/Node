# Node  

## Table Content  
- [Global node_modules directory](#global-node_modules-directory)  
- [Checking the Version of a Global Package](#checking-the-version-of-a-global-package)  
    - [Listing all global packages](#listing-all-global-packages)  
    - [Checking specific package version of a globally](#checking-specific-package-version-of-a-globally)  

## Global node_modules directory  
Takes you to the directory where your globally installed npm packages are located. 
```bash
cd $(npm root -g)
```  

## Checking the Version of a Global Package  
To check the version of a globally installed package, you can use the following command:  

### Listing all global packages  
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


