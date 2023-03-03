export default function rgb2hsv (r,g,b) {
  var computedH = 0;
  var computedS = 0;
  var computedV = 0;
 
  r=r/255; g=g/255; b=b/255;
  var minRGB = Math.min(r,Math.min(g,b));
  var maxRGB = Math.max(r,Math.max(g,b));
 
  // Black-gray-white
  if (minRGB==maxRGB) {
   computedV = minRGB;
   return [0,0,computedV*100];
  }
 
  // Colors other than black-gray-white:
  var d = (r==minRGB) ? g-b : ((b==minRGB) ? r-g : b-r);
  var h = (r==minRGB) ? 3 : ((b==minRGB) ? 1 : 5);
  computedH = 60*(h - d/(maxRGB - minRGB));
  computedS = (maxRGB - minRGB)/maxRGB;
  computedV = maxRGB;
  return [computedH,computedS,computedV*100];
 }