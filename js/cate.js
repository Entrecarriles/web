$(document).ready( function() {
    
    $('.categorias .categoria[category="all"]').addClass('select');
    
    $('.categoria').click( function() {
        
        var cat = $(this).attr('category');
        
        $('.categoria').removeClass('select');
        $(this).addClass('select');
        
        $('.pais').hide();
        $('.pais[category="'+cat+'"]').show();
        
    })
    
    $('.categoria[category="all"]').click( function() {
        
        $('.pais').show();
        
    })
    
})