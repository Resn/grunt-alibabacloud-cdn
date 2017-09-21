# grunt-alibabacloud-cdn
> Cache refresher for Alibaba Cloud (Aliyun) CDN.


## Getting Started

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-alibabacloud-cdn --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-alibabacloud-cdn');
```

## Upload task
_Run this task with the `grunt alibabacloud_cdn` command._

Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

### Options

- accessKeyId {String} access key you create on aliyun console website
- appSecret {String} access secret you create
- refreshPaths {Array} array of urls that you would like to refresh.
- refreshDirs {Array} array of url prefixs to clear. This will clear all objects under path.

### Usage Examples

```js
    "alibabacloud_cdn": {
        "options": {
            "accessKeyId": "YOUR_ALISDK_ID",
            "appSecret": "YOUR_ALISDK_KEY"
        },
        "staging_cdn": {
            "options": {
                "refreshDirs": ["http://example.com/static/"],
                "refreshPaths": ["http://example.com/index.html"]
            }
        }
    }
```