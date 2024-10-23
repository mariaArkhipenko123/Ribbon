function deactivateAccount() {
    var accountId = Xrm.Page.data.entity.getId(); // Get the account ID
    if (!accountId) {
        alert("Unable to retrieve the account ID.");
        return;
    }

    var account = {};
    account["statecode"] = 1; // Set the state to "Inactive"
    account["statuscode"] = 2; // Set the status to "active"

    Xrm.WebApi.updateRecord("account", accountId.replace("{", "").replace("}", ""), account).then(
        function success(result) {
            console.log("Account successfully deactivated.");
            Xrm.Page.data.refresh(); // Refresh the form
        },
        function(error) {
            console.log("Error deactivating the account: " + error.message);
            alert("Error: " + error.message);
        }
    );
}
