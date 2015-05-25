
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
    this.route('about', {
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
    this.render('about');
       
  },
         fastRender: true
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
   
});