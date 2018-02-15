      jQuery(function($){
        
        //$('.colorbox,.thickbox').colorbox({iframe:true, innerWidth:998, height:"80%"});

        $('.search-opener').on('click', function(e){
          e.preventDefault();
          $('html, body').animate({
            scrollTop: 0
          }, 800);
          $('.universal-search').slideDown();
          $('#search_term').focus();
          $('#menu').slideUp();
        });
        $('.search-closer').on('click', function(e){
          e.preventDefault();
          $('.universal-search').slideUp();
        });
        $('header .navbar-links .menu-opener').on('click', function(e){
          e.preventDefault();
          $('#menu').slideDown();
        });
        $('#menu .menu-closer').on('click', function(e){
          e.preventDefault();
          $('#menu').slideUp();
        });
        $('#preheader .menu-closer').on('click', function(e){
          e.preventDefault();
          $('#preheader #locations .location_menu').hide();
          $('#preheader .menu-closer').hide();
          $('#preheader #locations').blur();
        });
        $('#preheader .menu-opener').on('click', function(e){
          e.preventDefault();
          $('#preheader .menu-closer').show();
          $('#preheader #locations .location_menu').slideDown();        
        });
        
        /**
        $('select.filter').select2({
            allowClear: true,
            minimumResultsForSearch: 20
        });
        **/
      });
