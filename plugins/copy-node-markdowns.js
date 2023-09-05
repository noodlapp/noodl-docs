const fs = require('fs')
const path = require('path')

function resolveImports(content,dir) {
    const includeMatch = content.matchAll(/@include\s\"(.*)\"/g)
    for(const _s of includeMatch) {
        const includePath = _s[1];
        const absPath = path.join(dir,includePath)

        const include = fs.readFileSync(absPath)
        content = content.replace(_s[0],include)
    }

    return content
}

function copyNodeMarkdowns(dir) {
    fs.readdirSync(dir).forEach(file => {
        if( fs.lstatSync(dir + '/' + file).isDirectory() ) {
            copyNodeMarkdowns(dir + '/' + file)
        }
        else if(file.endsWith('.md')) {
            const content = fs.readFileSync(dir + '/' + file)
            const resolved = resolveImports(content.toString(),dir)
            const filePath = 'build/' + dir + '/' + file;
            if (!fs.existsSync('build/' + dir)){
                fs.mkdirSync('build/' + dir);
            }
            fs.writeFileSync(filePath, resolved)
        }
    })
}

module.exports = function(context, options) {
    return {
      name: 'docusaurus-copy-node-markdowns-plugin',
      configureWebpack(config, isServer, utils) {
        const {getJSLoader} = utils;
        return isServer?{
            plugins: [
                {
                    apply: (compiler) => {
                        compiler.hooks.afterEmit.tap('AfterEmitPlugin', (compilation) => {
                            console.log('Copying node markdown files')

                            options.paths.forEach(path => {
                                console.log(' - Processing path: ' + path)
                                copyNodeMarkdowns(path)
                            })
                            
                        })
                    }
                }
            ]
        }:{}
      },
    };
  };