pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh '''npm install
npm run ng --build'''
        echo 'build completed'
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