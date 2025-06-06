/*EBLoader.js - v_2_41_0_0 - 2022-10-25*/
function ebGetParamValue(queryString, paramName) {
    var res = "";
    if ((queryString.length > 0) && (paramName.length > 0)) {
        var begin = queryString.search("[?|&]" + paramName + "=");
        if (begin != -1) {
            begin += paramName.length + 2;
            var end = (queryString.indexOf("&", begin) == -1) ? queryString.length : queryString.indexOf("&", begin); 
            res = unescape(queryString.substring(begin, end));
        }
    }
    return res;
}
// Get the modules version from the query string
ebQueryString = window.ebQueryString || document.location.search || "";
ebHtml5Ver = ebGetParamValue(ebQueryString, 'v');
ebInstreamVer = ebGetParamValue(ebQueryString, 'vpaidV');
ebPreview = ebGetParamValue(ebQueryString, 'isPreview');
ebDivAd = ebGetParamValue(ebQueryString, 'divAd') || ebGetParamValue(ebQueryString, 'd');

ebScriptsHost = ebGetParamValue(ebQueryString, "sHost") || "ds.serving-sys.com";
ebNonCachedPath = ebGetParamValue(ebQueryString, "nonCached") || '';
ebStrProtocol = getScriptProtocol();
strScriptPrefix = ebGetParamValue(ebQueryString, "prefix") || "";

function getScriptProtocol () {
    return "https://";
}

if (document.location.protocol == "data:") { //localMode 
    window.EBModulesConfig = window.EBModulesConfig ? window.EBModulesConfig : {};
    EBModulesConfig.localMode = true;
    ebStrProtocol = "https://";
}

if (ebStrProtocol == "https://" && (ebScriptsHost.indexOf("ds.serving-sys.com") == 0 || ebScriptsHost.indexOf("ds.serving-sys-int.com") == 0)) { 
    ebScriptsHost = "secure-" + ebScriptsHost;
}

ebCachePath = ebStrProtocol + ebScriptsHost + "/" + strScriptPrefix + "BurstingCachedScripts/";
VpaidHTML5 = (ebInstreamVer ? ebInstreamVer : 'VPAID/HTML5_1_13_0_33');
EBModules = {
    basePath: ebCachePath,
    relPath: 'HTML5Res',
    version: (ebHtml5Ver ? ebHtml5Ver : '_2_160_1_0'),   
    modules:
    {
        EB: {
            scriptName: 'EB.js'
        },
        Video:{
            scriptName: 'EBV.js'
        },
        MRAID:{
            scriptName: 'EBCMD.js'
        },
        EBCMD:{ 
            scriptName: 'EBCMD.js'
        },
        SV:{
            scriptName: 'EBSV.js'
        },
        SVCAT:{
            scriptName: 'EBCat.js'
        },
        EBAPI:{
            scriptName: 'EB_api.js'
        },
        Comm : {
            scriptName : 'EBComm.js'
        },
        VPAID: {
            basePath: ebCachePath,
            relPath: '',
            scriptName : 'EBVPAID.js',
            version: VpaidHTML5 || ''  
        }
    }
};
//this colelction is initialized here, and each module that would like to get the adconfig inserts itself to it on script load (that is - before the eb is inialized)
ebArrModulesToTrigger = [];

(function () {
    function createPreloadedModules() {
        // Create objects mimic so creative code will work.
        // When modules will be ready, the EB_INITIALIZED will trigger the creative part instansiation
        EBG = window.EBG || {};
        EBG.EventName = EBG.EventName || { EB_INITIALIZED: "ebinitialized" };
        EB = window.EB || (EBG.EBC ? new EBG.EBC : {
            _subscriptions: {},
            addEventListener: function (eventName, callback, callbackBinding) {
                try {
                    // Make sure we have a queue for the specified event
                    if (!this._subscriptions[eventName])
                        this._subscriptions[eventName] = [];

                    // Create an EventSubscription object and add it to the queue
                    var subscription = { eventName: eventName, callback: callback, callbackBinding: callbackBinding };

                    this._subscriptions[eventName].push(subscription);
                    return subscription;
                } catch (e) { }
            },
            isInitialized: function() { 
                return false;
            }
        });
    }

    function buildModulesList(list) {
        if(!list || !list.length) {
            // Users list undefined? return default list
            return ["EB"];
        }

        var res = [];
        for (var i = 0; i < list.length; i++) {
            if(list[i] != "EB" && list[i] != "EBCMD") {
                res.push(list[i]);
            }
        }

        // If EBCMD is in list, we should only load it last and not EB.js
        if(list.indexOf("EBCMD") != -1) {
            res.push("EBCMD");
        } else {
            res.push("EB");
        }

        return res;
    }

    function format(str) {
        for (var i = 1; i < arguments.length; i++) {
            str = str.replace('{' + (i - 1) + '}', "" + arguments[i]);
        }
        return str;
    }

    // load script sync

    function loadScript(src) {
        try {
            // get reference to the head dom element or document element if head doesn't exist
            var parent = document.getElementsByTagName('head')[0] || document.documentElement;
            // create http request object
            var httpRequest = new XMLHttpRequest();
            // define the request
            httpRequest.open('GET', src, false);
            // execute request
            httpRequest.send();
            // create script dom element
            var script = document.createElement('script');
            script.type = 'text/javascript';
            // set script content to the script returned by the http request
            script.text = httpRequest.responseText;
            // append the script element - this will immediatlly execute the script 
            parent.appendChild(script);		      
        }
        catch (e) {
            //in case of some modules not loaded - continue
        }
    }

    function getDataFromRemoteServer(url, cbFunc, cbBinding) {
        if (!url || EBG.isOfflineDemo) {      //To save us from checking this in every place we call getDataFromRemoteServer
            return false;
        }
        cbBinding = cbBinding || window;

        var xdrSuccess = function () {
            try {
                cbFunc.call(cbBinding, xdr.responseText);
            }
            catch (e) {
                cbFunc.call(cbBinding);
            }
        };

        var handled = false;
        try {
            if (window.document.documentMode != 9) {
                var xhr = new XMLHttpRequest();
                xhr.open('GET', url, true);
                handled = true;
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4) {
                        if (xhr.status == 200) {
                            cbFunc.call(cbBinding, xhr.responseText);
                        }
                        else {  //ERROR
                            cbFunc.call(cbBinding);
                        }
                    }
                };
                xhr.send();
            }
            else if (window.XDomainRequest) {
                //  IE8/9 - for cross-domain request in IE browser use XDomainRequest object
                //  Note that this is always async!!!
                var xdr = new XDomainRequest();
                if (xdr) {
                    xdr.onerror = function () { cbFunc.call(cbBinding); };
                    xdr.ontimeout = function () { cbFunc.call(cbBinding); };
                    xdr.onload = xdrSuccess;
                    xdr.onprogress = function () {};
                    xdr.open("get", url);
                    xdr.send();
                    handled = true;
                }
            }
        }
        catch (e) {
            handled = false;
        }
        return handled;
    }
		
    // get full url to the specified module
    function getModuleURL(moduleName) {
        var url = null;
        if (moduleName && EBModules.modules[moduleName]) {
            var module = EBModules.modules[moduleName];
            if (module.basePath) {
                url = format("{0}{1}{2}/{3}", module.basePath, module.relPath, module.version, module.scriptName);
            }
            else {
                url = format("{0}{1}{2}/{3}", EBModules.basePath, EBModules.relPath, EBModules.version, module.scriptName);
            }
        }
        else { //not an internal module - look for it in the server config. BUT the server config only becomes available 
            // when we pass the ad config to the modules - so create a wrapper for the module, that registers itself to the modules to trigger 
            // - and then will load the script on EB.init.
            //if the modulename is http URL and not a config name - this will work too. 
            var mwrapper =  {
                modulesConfig : null,
                moduleName : moduleName, 
                url : null,
                init : function(adConfig) {
                    moduleConfig = adConfig.moduleInfo;
                    if (moduleConfig[moduleName]) {
                        //by default, assume that the module config gives us the relative path of the script to the current script host
                        this.url =  format("{0}{1}/{2}{3}", ebStrProtocol, ebScriptsHost, strScriptPrefix, moduleConfig[moduleName]);
                        //in the case the modulesconfig is https, and not relative to current host - change the name so we will
                        //get the correct url in the next if 
                        moduleName = moduleConfig[moduleName];                            
                          
                    } //module name could be a url to a script. this will set the url to the name. 
                    if (moduleName.indexOf("http://")==0 ||moduleName.indexOf("https://")==0) {             
                        this.url = moduleName; 
                        //we can't load http script from inside https , so change the protocol if the url
                        //started with http
                        if (this.url.indexOf("http://")==0 && ebStrProtocol =="https") {
                            this.url = url.replace("http://","https://");
                        }
                    } 
                    if ( this.url) {
                        loadScript(this.url);
                    }
                        
                }
            };
            ebArrModulesToTrigger.push(mwrapper);
        }
        return url;
    }

    // load modules
    function loadModulesNew(inModuleList) {           
        var results = {};
        var count = inModuleList.length;

        function done() {
            var head = document.getElementsByTagName('head');
            var parent = (head && head[0]) || document.documentElement;
            for (var i = 0; i < inModuleList.length; i++) {
                if(results[inModuleList[i]]) {
                    var script = document.createElement("SCRIPT");
                    script.type = 'text/javascript';
                    script.text = results[inModuleList[i]];
                    parent.appendChild(script);
                }
            }
        }

        for (var i = 0; i < inModuleList.length; i++) {
            (function(name) {
                getDataFromRemoteServer(getModuleURL(name), function(result) {
                    count--;
                    results[name] = result;

                    if(count == 0) {
                        done();
                    }
                });
            })(inModuleList[i]);
        }
    }

    function loadModules(inModuleList) {           
        var loadEB = true;
        // Load additional EB modules such as Video
        if (typeof(inModuleList) != 'undefined' && inModuleList instanceof Array)
        {
            for (var i = 0; i < inModuleList.length; i++)
            {
                var moduleName = inModuleList[i];
                // EB should be loaded last, if it was mentioned inside the list, skip it
                if (moduleName == "EB") { 
                    continue;
                } else if (moduleName == "EBCMD") {
                    loadEB = false;
                }
                var moduleUrl = getModuleURL(moduleName);
                if (moduleUrl) {
                    loadScript(moduleUrl);
                }
            }
        }
        if (loadEB) {
            var moduleUrl = getModuleURL("EB");
            if (moduleUrl) {
                loadScript(moduleUrl);
            }
        }
    }

    if(ebQueryString.indexOf("&n=1") != -1){
        window.shouldModernizrNew = true;
        createPreloadedModules();
        loadModulesNew(buildModulesList(window.EBModulesToLoad));
    } else {
        if (typeof(EBModulesToLoad) == 'undefined') {
            EBModulesToLoad = [];
        }
           
        loadModules(EBModulesToLoad); 
    }
})();

