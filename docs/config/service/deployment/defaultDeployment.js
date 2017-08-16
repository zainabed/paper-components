'use strict';

module.exports = function defaultDeployment() {
  return {
    name: 'default',
    examples: {
      commonFiles: {
        scripts: [
          '../../demo-lib-script.js',
          '../../demo-script.js',
          '../../templates.js',
        ],
        stylesheets: [
          '../../demo-material.css',
        ]
      },
      dependencyPath: '../../'
    },
    scripts: [

    ],
    stylesheets: [

    ]
  };
};
