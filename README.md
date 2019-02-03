# README #
Tips for prodigy-api

###Debug and attach to process###
1-run 
```
    npm run vscode:debug
``` 

2-For VSCODE ensure you have a "run" confing as follows
```
...
,
{
 "name":"Attach",
 "type":"node",
 "request": "attach",
 "port": 43051,
 "stopOnEntry": false
}, 
...
```


### Enable Mongo Verbose Queries ###
To enable MongoDb Verbose it's queries on console add lines at : 
/_gitrepo/prodigy-api/src/database/index.ts
```
		CORE.set("debug", true); 
        ASSOCIATES.set("debug", true); 
   
         return { 
            CORE, 
            ASSOCIATES, 
            ASSOCIATES 
        }; 
```


### Access online docs for API (swagger generated ) ###

```
http://serverip:22301/docs
```

for integration example is:

```
http://200.123.138.249:22301/docs
```