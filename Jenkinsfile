pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh '''rm package-lock.json
npm cache clean --force

npm install --f
ng build

'''
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