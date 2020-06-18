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

A template for creating React components library.
This project is creating for helping and save time for everyone that wants to create his own components library and reuse components across projects.
When you start creating your own library, it can be tough and painful with a lot of stuff to do just for settings up your project.

## Features

This template comes with several tools that you need for a completes and testable components library.

- SCSS support
- GitHub Actions integrations with Bit
- Exporting components to cloud on bit.dev
- PropTypes support
- Classnames library installed
- Mocha & Chai tester

## How to run the demo ?

I made a simple products list for example, clone the repo and run the project:

```
npm i
npm start
```

## CI workflows

I made three files in the [workflows folder](.github/workflows):

- `bit-build-and-test.yml` will run when pull requests are make on master, and will build and test your components.
- `bit-export.yml` will run when code are pushed to master, and will tag & export all the modified components to your [bit.dev collection](https://bit.dev/joshk/react-components-library-template).
  To skip these files, just add to your commit message `skip-bit-ci`.
- `main.yml` will run the build command of the project.

## How to config bit to start sharing components ?

I'll guide you to the process in few setups:

- Create your collection on [bit.dev](bit.dev).
- Install `bit-bin` on your machine: `npm i bit-bin -g`.
- Create a secret key `BIT_TOKEN` in your GitHub repository with the your Bit key, so you will be able to export components during CI process. Read more about it [here](https://help.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets#using-encrypted-secrets-in-a-workflow).

## How to export components to bit.dev and CI export ?

After every-things is setup, you can now export the components in this project for example.

- So fisrt, let's initialize bit, run: `bit init`.
- Now track all the components under [src/components](src/components) with their test files:
  `bit add src/components/*/ --tests src/components/{PARENT}/{PARENT}.test.js`.
  We can also track the data file: `bit add src/data/products.js --id data/products`.
- Before exporting them, we need to import compiler and tester, run this commands:

```
bit import bit.envs/compilers/react@1.0.8 --compiler
bit import bit.envs/testers/mocha@5.0.2 --tester
```

- Tag all the components with the version you want: `bit tag --all 1.0.0`.
- Export the components to collection on bit: `bit export <user-name>.<collection-name>`

Now you can config your collection to be default in the bit config object in `package.json` file, so bit will know where to export your components during CI.

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

Now Bit will export automaticly your components when changes are made when you push code to master, or accepting pull requests.  
Read more about Bit in GitHub CI [here](https://github.com/teambit/bit-with-github-actions).

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

## Contributing

- Pull requests and ⭐ stars are always welcome.
- For bugs and feature requests, please create an issue.

## FAQ

### How to handling assets ?

Please check out the documentation for this. [The direct link to handling assets](https://docs.bit.dev/docs/best-practices#handling-assets).

### Error during bit export on CI

- Make sure you exported your components first time from your locale workspace.
- Check that you added `defaultScope` [param](#how-to-export-components-to-bit.dev-and-ci-export).

### I'm using a different tester

No problem, if you using Jest, you can import it as a tester:
`bit import bit.envs/testers/jest --tester`

### The Bit tester not working as expected for me

Bit testers need sometimes to be configured specifically depending on your project configuration.
You can open an issue with your error on the [environments repository](https://github.com/teambit/envs).  
To continue working correctly you can remove the bit tester from the config object, and run your global project testing in the CI instead of bit tester.
Let's assume you run your global testing with `npm run test`, you need now to replace with the `bit test` in CI workflows.

- Go to [bit-build-and-test.yml](.github/workflows/bit-build-and-test.yml) that run on PR's, search for `bit test` and replace it with your own test commands.
- Go to [bit-export.yml](.github/workflows/bit-export.yml) that run when code are pushed to master, search for `bit tag -a` and add above it your own test commands.
