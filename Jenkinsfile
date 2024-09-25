pipeline {
    agent any
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm install --save-dev eslint'
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                sh 'npm install --save-dev mocha'
                sh 'npm run test'
            }
        }
        stage('Start Application') {
            steps {
                sh 'npm run start'
            }
        }
    }
}
