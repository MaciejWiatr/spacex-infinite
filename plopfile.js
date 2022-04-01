module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the component?',
      },
      {
        type: 'list',
        name: 'type',
        choices: ['atom', 'molecule', 'organism'],
        message: 'What is the type of the component?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{type}}s/{{properCase name}}/{{properCase name}}.tsx',
        templateFile: '.plop/templates/Component.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{type}}s/{{properCase name}}/index.tsx',
        templateFile: '.plop/templates/Component.index.hbs',
      },
    ],
  })
}
