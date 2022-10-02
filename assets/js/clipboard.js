function copyToClipboardGmail() {
    var copyText = document.getElementById("gmail");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Gmail Copied" //+ copyText.value;
  }

function copyToClipboardOutlook() {
    var copyText = document.getElementById("outlook");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    
    var tooltip = document.getElementById("myTooltip1");
    tooltip.innerHTML = "Outlook Copied" //+ copyText.value;
}
 
function outMouse() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
  }

function outMouse1() {
    var tooltip = document.getElementById("myTooltip1");
    tooltip.innerHTML = "Copy to clipboard";
  }
  