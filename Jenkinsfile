pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        echo 'build completed'
        sh 'npm install'
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