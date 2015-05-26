
Router.map(function(){
    // Specify a different template than 'home'
this.route('home', {
  path: '/',
  layoutTemplate: 'layout',
     title: 'IV Hair Co | Get your hair done today',
   action: function() {
    // this is an instance of RouteController
    // access to:
    //  this.params
    //  this.wait
    //  this.render
    //  this.stop
    //  this.redirect


    // render yieldTemplates
    this.render('header', {to: 'menu'});
    this.render('footer', {to: 'footer'});
    this.render('home');
       
  },
     fastRender: true
});
    this.route('aboutIv', {
  path: '/about-ivhair',
  layoutTemplate: 'layout',
        title: 'About IV Hair Co',
   action: function() {
    // this is an instance of RouteController
    // access to:
    //  this.params
    //  this.wait
    //  this.render
    //  this.stop
    //  this.redirect


    // render yieldTemplates
    this.render('header', {to: 'menu'});
    this.render('footer', {to: 'footer'});
    this.render('aboutIv');
       
  },
        
});
        this.route('booking', {
  path: '/book-with-ivhair',
  layoutTemplate: 'layout',
        title: 'Book an Appointment ',
   action: function() {
    // this is an instance of RouteController
    // access to:
    //  this.params
    //  this.wait
    //  this.render
    //  this.stop
    //  this.redirect


    // render yieldTemplates
    this.render('header', {to: 'menu'});
    this.render('footer', {to: 'footer'});
    this.render('booking');
       
  },
             fastRender: true
});
            this.route('suggest', {
  path: '/suggest-a-style',
  layoutTemplate: 'layout',
        title: 'Style Suggestions? ',
   action: function() {
    // this is an instance of RouteController
    // access to:
    //  this.params
    //  this.wait
    //  this.render
    //  this.stop
    //  this.redirect


    // render yieldTemplates
    this.render('header', {to: 'menu'});
    this.render('footer', {to: 'footer'});
    this.render('suggest');
       
  },
             fastRender: true
});
                this.route('suggestBody', {
  path: '/admin/suggest-a-style',
  layoutTemplate: 'layout',
        title: 'Style Suggestions? ',
   action: function() {
    // this is an instance of RouteController
    // access to:
    //  this.params
    //  this.wait
    //  this.render
    //  this.stop
    //  this.redirect


    // render yieldTemplates
    this.render('header', {to: 'menu'});
    this.render('footer', {to: 'footer'});
    this.render('suggestBody');
       
  },
             fastRender: true
});
   
});