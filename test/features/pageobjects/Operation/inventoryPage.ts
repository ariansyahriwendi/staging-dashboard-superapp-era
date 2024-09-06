export default new class InventoryV3 {
     get inputSearch() { return $('//*[@data-testid="search-bar"]'); }
     get btnCari() { return $('//*[@id="searchBar"]/div/span/span/span[1]/input'); }
     get btnFilterGudang() { return $('//*[@data-id="btn-filter-warehouse"]'); }
     get btnFilterKetersediaanStok() { return $('//*[@data-id="btn-filter"]'); }
     get btnFilterTipeProduk() { return $('//*[@data-id="btn-filter-type"]'); }
     get btnFilterSatuan() { return $('//*[@data-id="btn-filter-unit"]'); }
     get btnModalFilter() { return $('//*[@data-id="filter-modal-trigger"]'); }
     get btnExport() { return $('//*[@data-id="export-csv-outgoing-goods"]'); }
     get tabReguler() { return $('//*[@id="site-layout-background"]//div[3]//div[1]/div[1]//div[1]'); }
     get infoProduk() { return $('//*[@id="rc-tabs-0-panel-regular"]/div[1]//div[2]/table/tbody/tr[2]/td[1]//div[1]'); }
     get colTotalStok() { return $('//*[@id="rc-tabs-0-panel-regular"]/div[1]//div[2]/table/tbody/tr[2]/td[3]/div'); }
     get colTotalStokGudang() { return $('//*[@id="rc-tabs-0-panel-regular"]/div[1]//div[2]/table/tbody/tr[2]/td[4]/div'); }
     get colStokBooking() { return $('//*[@id="rc-tabs-0-panel-regular"]/div[1]//div[2]/table/tbody/tr[2]/td[5]/div'); }
     get colStokBlmRilis() { return $('//*[@id="rc-tabs-0-panel-regular"]/div[1]//div[2]/table/tbody/tr[2]/td[6]/div'); }
     get colStokRilis() { return $('//*[@id="rc-tabs-0-panel-regular"]/div[1]//div[2]/table/tbody/tr[2]/td[7]/div[1]'); }
     get colKonsinyasi() { return $(''); }
     get colStokBundle() { return $(''); }
     get colStokFS() { return $(''); }
     get colStokTransfer() { return $(''); }
     get colStokSample() { return $(''); }
     get colStokTemporary() { return $(''); }
     get colStokRusak() { return $(''); }
     get colStokRetur() { return $(''); }
     get colStokLuarGudang() { return $(''); }
     get colStokDikirim() { return $(''); }
     get colStokToko() { return $(''); }
     get colStokSettle() { return $(''); }
     get colStokVendor() { return $(''); }
     get colStokHvRusak() { return $(''); }
     get colStokHvRetur() { return $(''); }
     get colStokHvSample() { return $(''); }
}
