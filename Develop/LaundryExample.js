function doLaundry() {
    goToLaundryRoom();
    const isLoadWhites = true;
    let isNewClothesToFold = transferClothes(isLoadWhites);
    if(isNewClothesToFold === true) {
        bringClothesToFoldingArea();
        foldClothes();
        putClothesAway()
    }
}


function transferClothes(doesThisNeedBleach) {
    let laundryTransfered = false;
    // if there are clothes in the dryer
    if (true) {
        // take clean dryed clothes out of dryer
        // add to clean hamper
        laundryTransfered = true;
    }
    // if clothes are in washer
    if (true) {
        // take wet clothes out of washer
        // add to the dryer
        // add sheets to dryer
        // turn dryer on
        laundryTransfered = true;
    }
    // if there are dirty clothes in hamper
    if (true) {
        // take clothes out of dirty hamper
        // add to washer
        // add detergent
        // add softener
        if (doesThisNeedBleach === true) {
            // add bleach
        }
        // turn on washer
        laundryTransfered = true;
    }

    return laundryTransfered
}

doLaundry();
transferClothes(false);