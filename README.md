# React Components Library Template

![Build CI](https://github.com/JoshK2/react-components-library-template/workflows/Build%20CI/badge.svg)
![Bit export CI](https://github.com/JoshK2/react-components-library-template/workflows/Bit%20export%20CI/badge.svg)
![Bit build and test CI](https://github.com/JoshK2/react-components-library-template/workflows/Bit%20build%20and%20test%20CI/badge.svg)
[![components](https://img.shields.io/badge/dynamic/json.svg?color=6e3991&label=components&query=payload.totalComponents&url=https%3A%2F%2Fapi.bit.dev%2Fscope%2Fjoshk%2Freact-components-library-template)](https://bit.dev/joshk/react-components-library-template)
[![Slack](https://badgen.now.sh/badge/chat/on%20Slack/cyan)](https://join.slack.com/t/bit-dev-community/shared_invite/enQtNzM2NzQ3MTQzMTg3LWI2YmFmZjQwMTkxNmFmNTVkYzU2MGI2YjgwMmJlZDdkNWVhOGIzZDFlYjg4MGRmOTM4ODAxNTIxMTMwNWVhMzg)
[![reddit](https://badgen.now.sh/badge/chat/on%20Reddit/orange)](https://www.reddit.com/r/bit_dev/)

<p align="center">
  <a href="https://bit.dev/joshk/react-components-library-template"><img src="https://i.imagesup.co/images2/39281df9a822157a2fa3b58e520be0a5ebb0ae85.png"></a>
</p>

A template for creating a React components library.

Setting up a React component library can be a complex and time-consuming project with a lot of challanges.

This project help you set up a high-quality library in a timely manner. It saves time and effort for anyone that needs to create a component library, to reuse components across React projects. It takes care of 

## Features

This template comes with pre-created setup for a 

This template comes with several tools that you need for a completes and testable components library.

- SCSS support
- GitHub Actions integrations with Bit
- Exporting components to reuse via bit.dev
- PropTypes support
- Classnames library installed
- Mocha & Chai tester

## Run the demo

As an example, this library already containts demo components for building "product-list" applications.  
Clone the repo and run the project:

```
npm i
npm start
```

## How to create a new component with a good structure ?

The structure I used for this project is a structure I recommend for working on components library.

```
src/components/name
├── name.js
├── name.module.scss
├── name.test.js
└── index.js
```

I added a shortcut command to create a new component, just run:
`npm run create --name=NEW_COMPONENT_NAME`

## CI workflows

See these three files in the [workflows folder](.github/workflows):

- `bit-build-and-test.yml` will run when pull requests are make on master, and will build and test your components.
- `bit-export.yml` will run when code are pushed to master, and will tag & export all the modified components to your [bit.dev collection](https://bit.dev/joshk/react-components-library-template).
  To skip these files, just add to your commit message `skip-bit-ci`.
- `main.yml` will run the build command of the project.

## Config Bit to share components

To export your own components for managed reuse follow these steps:

- Create a free [bit.dev](bit.dev) account and create a hosted collection.
- Install `bit-bin` on your machine: `npm i bit-bin -g`
- (For CI ->) Create a secret key `BIT_TOKEN` in your GitHub repository with the your Bit key, so you will be able to export components during CI process. Read more about it [here](https://help.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets#using-encrypted-secrets-in-a-workflow).

## Export components to bit.dev during CI

***Note: The first export (only) [should be done manually](https://docs.bit.dev/docs/export)***

After every-things is setup, you can now export the components in this project for example.
After setup, you can config the library's CI to export components (or new versions). This will let Bit  automaticly export your components when changes are made as you push code to master, or accepting pull requests.  

- Initialize Bit: `bit init`.
- Track all the components under [src/components](src/components) with their test files:
  `bit add src/components/*/ --tests src/components/{PARENT}/{PARENT}.test.js`.
  You can also track the data file: `bit add src/data/products.js --id data/products`.
- Import a reusable compiler and tester, by running these commands:

```
bit import bit.envs/compilers/react@1.0.8 --compiler
bit import bit.envs/testers/mocha@5.0.2 --tester
```

- Tag all the components with the version you want: `bit tag --all 1.0.0`.
- Export the components to collection on bit: `bit export <user-name>.<collection-name>`

Now config your bit.dev collection to be the default go-to in your `package.json` file, so bit will know where to export your components during CI.

```
"bit": {
    "env": {
      "compiler": "bit.envs/compilers/react@1.0.18",
      "tester": "bit.envs/testers/mocha@5.0.2"
    },
    "componentsDefaultDirectory": "components/{name}",
    "packageManager": "npm",
    "defaultScope": "<user-name>.<collection-name>"
  }
```

Now Bit will automaticly export your components when changes are made when you push code to master, or accepting pull requests. Read more about Bit in GitHub CI [here](https://github.com/teambit/bit-with-github-actions).


## FAQ

### How to handle assets?

Please check out the documentation for [the direct link to handling assets](https://docs.bit.dev/docs/best-practices#handling-assets).

### Error during bit export on CI

- Before integrating 
- Make sure your first export is [done manually](https://docs.bit.dev/docs/export) from your locale workspace.
- Make sure you added `defaultScope` [param](#how-to-export-components-to-bitdev-and-ci-export-).

### I'm using a different tester like Jest

No problem, if you are using Jest, you can import it as a tester:
`bit import bit.envs/testers/jest --tester`

### The Bit tester not working as expected

Bit testers need sometimes to be configured specifically depending on your project configuration.  

You can open an issue with your error on the [environments repository](https://github.com/teambit/envs).  
To continue working correctly you can remove the bit tester from the config object, and run your global project testing in the CI instead of bit tester.
Let's assume you run your global testing with `npm run test`, you need now to replace with the `bit test` in CI workflows.

- Go to [bit-build-and-test.yml](.github/workflows/bit-build-and-test.yml) that run on PR's, search for `bit test` and replace it with your own test commands.
- Go to [bit-export.yml](.github/workflows/bit-export.yml) that run when code are pushed to master, search for `bit tag -a` and add above it your own test commands.

## Contributing

- Pull requests and ⭐ stars are always welcome.
- For bugs and feature requests, please create an issue.
