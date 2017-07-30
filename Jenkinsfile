node('master'){
    deleteDir();
    stage('checkout'){
        checkout scm
    }

    stage('install'){
        sh 'git tag | xargs git tag -d'
        sh 'yarn install'
    }

    stage('tests'){
        sh 'ls'
    }

    stage('pack'){
        sh 'webpack'
    }

    stage('set version'){
        sh"""
        npm version patch -m "patched"
        """
    }

    stage('publish'){
        sh 'yarn publish'
    }

}