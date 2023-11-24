pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        echo 'build completed'
        sh '''sh \'npm install\'
echo " npm install"
sh \'ng build\'
echo " ng build"'''
      }
    }

    stage('Test') {
      steps {
        echo 'Test runing '
      }
    }

    stage('deploy') {
      steps {
        echo 'deployement'
      }
    }

  }
}