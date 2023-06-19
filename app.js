
let ServiseType = ''
let LeadAmount = ''
let TotalCost = 0

document.getElementById('serviseType').addEventListener('change', function() {
    var e = document.getElementById("serviseType");
    ServiseType = e.value;

    if(ServiseType === 'eCommerce' || ServiseType === 'Amazon' || ServiseType === 'B2B/Small'){
        if(LeadAmount === '1000'){
            TotalCost = 200
        }else if(LeadAmount == "5000"){
            TotalCost = 600
        }else if(LeadAmount == "10000"){
            TotalCost = 1000
        }else if(LeadAmount == "20000"){
            TotalCost = 16000
        }else if(LeadAmount == "50K - 100K"){
            TotalCost = 1400
        }
    }else{
        TotalCost = 0
    }

    document.getElementById('totalPrice').innerText = TotalCost
});

document.getElementById('leadAmount').addEventListener('change', function() {
    var e = document.getElementById("leadAmount");
    LeadAmount = e.value;
    
    if(ServiseType === 'eCommerce' || ServiseType === 'Amazon' || ServiseType === 'B2B/Small'){
        if(LeadAmount === '1000'){
            TotalCost = 200
        }else if(LeadAmount == "5000"){
            TotalCost = 600
        }else if(LeadAmount == "10000"){
            TotalCost = 1000
        }else if(LeadAmount == "20000"){
            TotalCost = 16000
        }else if(LeadAmount == "50K - 100K"){
            TotalCost = 1400
        }
    }else{
        TotalCost = 0
    }

    document.getElementById('totalPrice').innerText = TotalCost
});