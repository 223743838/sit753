pipeline {
    agent any

    stages {
        stage('Source Code Management') {
            steps {
                git 'https://github.com/223743838/sit753.git'
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build' // if applicable
            }
        }
        stage('Unit Testing') {
            steps {
                sh 'npm test'
            }
        }
        stage('Integration Testing') {
            steps {
                sh 'npm run integration-test' // if applicable
            }
        }
        stage('Deployment') {
            steps {
                sh 'node db.js'
            }
        }
        stage('Monitoring') {
            steps {
               success {
            echo 'Successfully Completed Unit and Integration Tests!'
            emailext attachLog: true,
                to: "s223743838@deakin.edu.au",
                subject: "Unit and Integration Tests Success: ${currentBuild.fullDisplayName}",
                body: "The Unit and Integration Tests ${currentBuild.fullDisplayName} was successful."
        }
        failure {
            echo 'Faliure on execution of Unit and Integration Tests!'
            emailext attachLog: true,
                to: "s223743838@deakin.edu.au",
                subject: "Unit and Integration Tests Failure: ${currentBuild.fullDisplayName}",
                body: "The Unit and Integration Tests ${currentBuild.fullDisplayName} failed. Please review the attached logs."
        }
            }
        }
    }
}