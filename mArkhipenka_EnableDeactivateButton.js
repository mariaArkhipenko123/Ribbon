function EnableDeactivateButton() {  
    const accountStatus = Xrm.Page.getAttribute("statecode").getValue();  
    return accountStatus === 0; // Check that account status is active  
}