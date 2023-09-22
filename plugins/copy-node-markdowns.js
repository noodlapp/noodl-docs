const fs = require('fs')
const path = require('path')

function resolveImports(content, dir) {
    const includeMatch = content.matchAll(/@include\s\"(.*)\"/g)
    for (const _s of includeMatch) {
        const includePath = _s[1];
        const absPath = path.join(dir, includePath)

        const include = fs.readFileSync(absPath)
        content = content.replace(_s[0], include)
    }

    return content
}

function copyNodeMarkdowns(dir, asFolderName) {
    fs.readdirSync(dir).forEach(function (file) {
        if (fs.lstatSync(dir + '/' + file).isDirectory()) {
            copyNodeMarkdowns(dir + '/' + file, asFolderName)
        } else if (file.endsWith('.md')) {
            const filePath = path.join(dir, file);
            const content = fs.readFileSync(filePath)
            const resolved = resolveImports(content.toString(), dir)
            
            let outputFilePath = 'build/' + filePath;
            if (asFolderName) {
                // HACK: Resolve the new nodes folder structure
                outputFilePath = 'build/' + filePath.split("\\").slice(0, -1).join("/") + '.md'
            }

            if (!fs.existsSync('build/' + dir)) {
                fs.mkdirSync('build/' + dir);
            }
            fs.writeFileSync(outputFilePath, resolved)
        }
    })
}

module.exports = function (context, options) {
    return {
        name: 'docusaurus-copy-node-markdowns-plugin',
        configureWebpack(config, isServer, utils) {
            const {
                getJSLoader
            } = utils;
            return isServer ? {
                plugins: [{
                    apply: (compiler) => {
                        compiler.hooks.afterEmit.tap('AfterEmitPlugin', (compilation) => {
                            console.log('Copying node markdown files')

                            options.paths.forEach(path => {
                                console.log(' - Processing path: ' + path.path)
                                copyNodeMarkdowns(path.path, !!path.folderName)
                            })

                        })
                    }
                }]
            } : {}
        },
    };
};