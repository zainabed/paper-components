pipeline {
    agent any

    stages {

      stage('install') {
        steps {
            sh 'npm install'
        }
      }

      stage('test') {

        steps {
            sh 'node_modules/.bin/nyc --reporter=html --reporter=text  node_modules/.bin/_mocha 'src/test/js/**/*Spec.js' --compilers js:babel-core/register'
        }

        post {
  			   success {
  				     step([$class: 'CoberturaPublisher', autoUpdateHealth: false, autoUpdateStability: false, coberturaReportFile: '**/target/site/cobertura/coverage.xml', failUnhealthy: false, failUnstable: false, maxNumberOfBuilds: 0, onlyStable: false, sourceEncoding: 'ASCII', zoomCoverageChart: false])
  				 }
  			}
      }
    }
}
