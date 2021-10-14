# ImageClassifierUpload

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Steps

#### Install mobilenet and peer dependencies

```shell
npm install @tensorflow-models/mobilenet @tensorflow/tfjs-core@~1.2.1 @tensorflow/tfjs-converter@~1.2.1
```

#### Skip lib checking

Skip check on lib by updating the `compilerOptions` of the tsconfig.json file :

```json
"skipLibCheck": true,
```


