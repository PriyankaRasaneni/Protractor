exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
       ignoreUncaughtExceptions: true,
       capabilities: {
           'browserName' : 'chrome'
       },
    //specs: ['Users/vishvaprasad/eclipse-workspace/ILBspec.js']
   //specs: ['ilbLogin.js'],
   //    
   //         plugins: [{
   //    package: 'protractor-testability-plugin'
   //    }],
   //specs: ['D:/Priyanka/ILB/Login-Createanaccount/Create_an_account.spec.js'],
//    specs: ['D:/Priyanka/ILB/Login-Createanaccount/Login.spec.js'],
    specs:['D:/Priyanka/ILB/GeneralDonations/GeneralDonation.spec.js'],
      
    //   specs: ['./ExploreLanguages/language.spec.js'],
        //specs: ['sample.js'],
       //specs: ['generaldonations.js'],
    //    suites: {

    // //   exploreLanguage: '/Users/vishvaprasad/eclipse-workspace/ILB/exploreLanguage.js',
    // //   //languagedonations: '/Users/vishvaprasad/eclipse-workspace/ILB/languagedonations.js'
    // //    projectdonations: '/Users/vishvaprasad/eclipse-workspace/ILB/projectdonations.js'
    // },
       //specs: ['ilbLogin.js'],
    params: {
        login: {
            loginemail: 'priyanka@olivetech.net',
            loginpassword: '123456'
        }

    },
   
    // params: {
    //   login: {
    //     email: 'oliveqa345@mailinator.com',
    //     password: '123456'
    //   },
    //     donations: {
    //         monthly: 'yes',
    //         receiveEmailPrayerUpdates: 'yes'
    //     }
    // },
   //    capabilities: {
   //    browserName: 'firefox'
   //  }
   //    multiCapabilities: [{
   //    browserName: 'firefox'
   //  }, {
   //    browserName: 'chrome'
   //  }]
   

       
// Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
framework: 'jasmine2' ,
     onPrepare: function() {
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(5000);
         var jasmineReporters = require('D:/Priyanka/ILB/Reports');
         jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter(null, true, true)
         );
        



   },


       jasmineNodeOpts:{
           showColors: true,
           defaultTimeoutInterval: 220000
           
       },
       
   }