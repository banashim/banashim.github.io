
  $( ".box" ).click(function() {
  $( this ).addClass( "selected" ).siblings(".selected").removeClass("selected");
  
});

$(".submit").click(function() {
  
  var n1 = $(".a.selected").length;
  
  var n2 = $(".b.selected").length;
 
  var n3 = $(".c.selected").length;
 
  var n4 = $(".d.selected").length;  
  

if ((n1 >= n2)&&(n1 >= n3)&&(n1 >= n4)) {
$( "span" ).html("You are a SHIBA INU! Complex, dignified, and hard-to-please. The Shiba Inu is a powerful, intelligent, faithful dog and so he must reflect his majestic person in the way he carries himself. The Shiba inu was created as an art piece. These are dogs that are meant to have a very simple, classic and elegant appearance.");
}
if ((n2 > n1)&&(n2 >= n3)&&(n2 >= n4)) {
$( "span" ).html("You are a CHIHUAHUA! Their personalities are varied, ranging from shy and timid to plucky and outgoing. All Chihuahuas are fiercely loyal to the people they love, and eat up as much attention as they can get. They will often posture toward bigger dogs, barking their little hearts out, but always seem to recognize and welcome the company of other Chihuahuas.") ;
}
    
if ((n3 > n1)&&(n3 > n2)&&(n3 >= n4)) {
$( "span" ).html("You are a FRENCH BULLDOG! French Bulldogs may look tough on the outside, but inside they are lovably soft, caring and easygoing. These dogs spread the good vibes wherever they go. Outgoing and open, they love nothing more than to cuddle on the couch, romp on the carpet or play in the yard. Boasting unlimited energy, they sometimes have no idea when (or how) to stop their motors. But, with a Frenchie, things never get out of hand. They rarely lose their cool, snap or bark. They simply want to roll around and play.");
}
    
if ((n4 > n1)&&(n4 > n2)&&(n4 > n3)) {
$( "span" ).html("You are a GOLDEN RETRIEVER!  Golden Retriever is a kind and gentle dog that is always eager to please, craves attention and will seek this attention from his own family and strangers alike. These canines love to be loved and love to love in return. These dogs get up very early in the morning with just one thought on their minds – what they are going to do for the day. ");
}
        
});
