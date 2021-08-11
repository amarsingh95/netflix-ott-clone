const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports={
entry:'./src/index.js',
output:{
       path:path.resolve(__dirname,'dist'),
       filename:'bundle.js'
       },
module:
{
 rules:[{
 
  test:/\.(js|jsx)$/,
  exclude:/node_modules/,
  use:{
       loader:'babel-loader',
        options:{
        presets:['@babel/preset-env','@babel/preset-react',
                {
              plugins: ['@babel/plugin-proposal-class-properties'
               , '@babel/plugin-transform-runtime'
            ]}
           ]
         }
      }

 },
 {
  test:/\.css$/,
  use:[
       { loader: 'style-loader' },
       { loader: 'css-loader' },
      ]

 },
 {
  test: /\.(jpg|png)$/,
  use: {
        loader: 'url-loader',
       },
    }
]


},
plugins:[
       new HtmlWebpackPlugin({
        template:'./public/index.html'
        })
        ],
resolve: {
  extensions: ['.js', '.jsx']
},


}