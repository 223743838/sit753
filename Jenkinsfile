pipeline {
    agent any
    stages {

        stage('Source Code Management') {
            steps {
                // Checking out the source code from GitHub
                git branch: 'main', url: 'https://github.com/223743838/sit753.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm install --save-dev webpack webpack-cli'
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
                sh 'npm run start & echo $! > app.pid &'
                // Check logs from Morgan or any custom logging implemented
                sh 'mkdir -p logs'
                echo 'Monitoring logs...'
                sh 'tail -f logs/access.log'

                // Archive logs in Jenkins
                archiveArtifacts artifacts: 'logs/**/*.log', allowEmptyArchive: true
            }
        }
        stage('Stop Application') {
            steps {
                 sh 'kill $(cat app.pid)'
             }
        }
    }
    post {
        always {
            // Clean up after the pipeline
            cleanWs()
        }
    }
}
