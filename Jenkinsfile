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
            sh "node_modules/.bin/nyc --reporter=cobertura --reporter=text  node_modules/.bin/_mocha 'src/test/js/**/*Test.js' --compilers js:babel-core/register -u tdd"
        }

        post {
  			   success {
  				     step([$class: 'CoberturaPublisher', autoUpdateHealth: false, autoUpdateStability: false, coberturaReportFile: '**/coverage/cobertura-coverage.xml', failUnhealthy: false, failUnstable: false, maxNumberOfBuilds: 0, onlyStable: false, sourceEncoding: 'ASCII', zoomCoverageChart: false])
  				 }
  			}
      }
    }
}
