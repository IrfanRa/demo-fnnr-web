/* jshint -W079 */
var mockData = (function() {
    return {
        getMockCustomers: getMockCustomers,
        getMockStates: getMockStates,
        getSuccessfullLogin: getSuccessfullLogin,
        blackWidow: getMockCustomers()[0],
        getPayments: getPayments
    };

    function getSuccessfullLogin() {
        return {
            id:12,username:'atlasoil@atlasoil.com',
            referenceId:null,roles:['CARRIER_ADMIN'],
            groupRole:['CARRIER'],
            userDetails:{
                id:12,
                fnnUserId:12,
                firstName:'Harshini',
                lastName:'Varsha',
                middleName:'K.',
                address1:null,
                address2:null,
                city:null,
                state:null,
                zip:null,
                phone:'(999) 765-4554',
                mobilePhone:'(222) 222-2222',
                createdTime:null},
            carrier:{
                id:12,
                email:'tmehall@atlasoil.com',
                carrierName:'atlas Trucking',
                scac:'AOTY',
                fein:'38-3225616',
                address1:'youou',
                address2:null,
                city:'Taylor',
                postalCode:'54321',
                stateProvince:'MI',
                phoneNumber:'(180) 087-8200',
                mobilePhone:null,
                faxNumber:'2222222222',
                usDotNumber:'287646',
                longitude:-88.42077680000001,
                latitude:46.786445,
                disableMinorityWomen:false,
                createdTime:null},
            customer:null,
            carrierAcc:null,
            surveyQuestionList:[
                {id:1,
                surveyId:1,
                'surveyQuestion':'How was your experience with Fuel Now Network app/portal?',
                'questionType':'SC',
                'surveyChoice1':'Fantastic',
                'surveyChoice2':'Good',
                'surveyChoice3':'Not so good',
                'requiredFlag':'N',
                'statusFlag':'A',
                'creationDate':1452235929049,
                'createdBy':80027,
                'lastUpdateDate':1452235929049,
                'lastUpdateBy':80027},
                {'id':2,
                'surveyId':1,
                'surveyQuestion':'How easy is it to find the information you are looking for in ' +
                    'Fuel Now Network app/portal?',
                'questionType':'SC',
                'surveyChoice1':'Very easy',
                'surveyChoice2':'Moderately easy',
                'surveyChoice3':'Not at all easy',
                'requiredFlag':'N',
                'statusFlag':'A',
                'creationDate':1452235929049,
                'createdBy':80027,
                'lastUpdateDate':1452235929049,
                'lastUpdateBy':80027},
                {'id':3,
                'surveyId':1,
                'surveyQuestion':'Has Fuel Now Network app/portal met your expectations?',
                'questionType':'SC',
                'surveyChoice1':'Below Expectations',
                'surveyChoice2':'Met Expectations',
                'surveyChoice3':'Above Expectations',
                'requiredFlag':'N',
                'statusFlag':'A',
                'creationDate':1452235929049,
                'createdBy':80027,
                'lastUpdateDate':1452235929049,
                'lastUpdateBy':80027},
                {'id':4,
                'surveyId':1,
                'surveyQuestion':'What changes would most improve our app/portal? Please specify',
                'questionType':'TXT',
                'surveyChoice1':null,
                'surveyChoice2':null,
                'surveyChoice3':null,
                'requiredFlag':'N',
                'statusFlag':'A',
                'creationDate':1452235929049,
                'createdBy':80027,
                'lastUpdateDate':1452235929049,
                'lastUpdateBy':80027}]};
    }

    function getMockStates() {
        return [
            {
                state: 'dashboard',
                config: {
                    url: '/',
                    templateUrl: 'app/dashboard/dashboard.html',
                    title: 'dashboard',
                    settings: {
                        nav: 1,
                        content: '<i class="fa fa-dashboard"></i> Dashboard'
                    }
                }
            }
        ];
    }

    function getMockCustomers() {
        return [
            {
                id: 1017109,
                firstName: 'Black',
                lastName: 'Widow',
                city: 'Albany',
                state: 'NY',
                zip: '12205',
                thumbnail: 'colleen_papa.jpg'
            },
            {
                id: 1017105,
                firstName: 'Tony',
                lastName: 'Stark',
                city: 'Loudonville',
                state: 'NY',
                zip: '12211',
                thumbnail: 'john_papa.jpg'
            },
            {
                id: 1017108,
                firstName: 'Clint',
                lastName: 'Barton',
                city: 'Bothell',
                state: 'WA',
                zip: '98012',
                thumbnail: 'ward_bell.jpg'
            },
            {
                id: 1017104,
                firstName: 'Steve',
                lastName: 'Rogers',
                city: 'Orlando',
                state: 'FL',
                zip: '33746',
                thumbnail: 'jesse_liberty.jpg'
            },
            {
                id: 1017106,
                firstName: 'Thor',
                lastName: 'of Asgard',
                city: 'Raleigh',
                state: 'NC',
                zip: '27601',
                thumbnail: 'jason_salmond.jpg'
            }
        ];
    }

    function getPayments() {
        return {
            '20889806': {
                'id': 611999,
                'invoiceNumber': '20889806',
                'carrierId': 15,
                'contractId': null,
                'orderNumber': '20889806',
                'contractType': 'Freight Only',
                'contractStatus': 'CONTRACT_AVAILABLE',
                'processStatus': 'NEW',
                'additionalComments': null,
                'invoiceDueDate': '2016-04-25',
                'referrenceNumber': '20889806',
                'totalEstimatedPayment': 152.66,
                'createTime': 1461718849991,
                'createdBy': -1,
                'lastUpdateTime': null,
                'uploadedBy': null,
                'applyMinVolumeCharge': false,
                'payerId': 381,
                'payerType': 'CUSTOMER',
                'submitDate': null,
                'manualUpdate': null,
                'invoiceDate': '2016-04-15',
                'orderexecution': {
                    'id': 625881,
                    'orderNumber': '20889806',
                    'carrierId': 15,
                    'assignedDriverFnnUserId': 534423,
                    'scheduledTime': 1461585600000,
                    'acceptedTime': null,
                    'completedTime': null,
                    'bolValidateStatus': 'MISSING_BOL',
                    'status': 'DELIVERED',
                    'createTime': 1461713481000,
                    'specialNotes': '',
                    'lastUpdateTime': 1461718850519,
                    'progressStatus': 'VERIFIED',
                    'documentsUploadStatus': 'BOL',
                    'customerId': 381,
                    'customerbilltoId': 382,
                    'dispatchMarketDesc': 'Taylor TP',
                    'torder': {
                        'id': 626060,
                        'orderNumber': '20889806',
                        'carrierGuid': '3946c1bf-01c0-43bf-af90-6b4dfb4f512e',
                        'freightLaneGuid': 'ddb57bc9-0fd9-4a00-8842-3cc5a136d76b',
                        'billToGuid': 'bf96351a-5e7b-4b88-a1a5-bed60a96dd93',
                        'orderStatus': 'DELIVERED',
                        'orderType': 'Standard',
                        'workDate': '2016-04-25',
                        'lastUpdateTime': 1461699808301,
                        'payload': {
                            'carrier': {
                                'id': 15,
                                'carrierName': 'Simon Holdings (Atlas Oil)',
                                'scac': 'AOTY'
                            },
                            'terminals': [
                              {
                                  'id': 859,
                                  'fedTerminalId': 'T38MI3005',
                                  'city': 'River Rouge',
                                  'address1': '205 Marion Street',
                                  'name': 'Buckeye River Rouge, 205 Marion Street, River Rouge, MI',
                                  'stateProvince': 'MI',
                                  'postalCode': '48218',
                                  'timezone': 'EDT'
                              }
                            ],
                            'terminalsgeo': [
                              {
                                  'id': 2089,
                                  'terminalId': 859,
                                  'longitude': -83.1238695,
                                  'latitude': 42.2760359
                              }
                            ],
                            'customerbilltoEntity': {
                                'id': 382,
                                'name': 'KROGER -40630541'
                            },
                            'sites': [
                              {
                                  'id': 601813,
                                  'siteNumber': '74267',
                                  'name': 'KROGER #686 (FRT) - (74267)',
                                  'address1': '7020 MONROE BLVD',
                                  'city': 'TAYLOR',
                                  'stateProvince': 'MI',
                                  'siteStandardNote': 'FREIGHT ONLY \nSITE CONTACT:' +
                                    ' PHIL KINNAIRD 248-648-9368'
                              }
                            ],
                            'sitesgeo': [
                              {
                                  'id': 601815,
                                  'siteId': 601813,
                                  'longitude': -83.2501722,
                                  'latitude': 42.25730679999999
                              }
                            ],
                            'products': [
                              {
                                  'id': 2,
                                  'grade': 'U w/Eth',
                                  'name': 'Unleaded 87 Unbranded Ethanol 10.0%',
                                  'shortName': 'U_UNL87_Eth10.0%',
                                  'rcolorComponent': '0',
                                  'gcolorComponent': '0',
                                  'bcolorComponent': '0'
                              }
                            ],
                            'driver': {
                                'user': {
                                    'id': 534423
                                },
                                'userDetails': {
                                    'id': 534425,
                                    'fnnUserId': 534423,
                                    'firstName': 'Jason',
                                    'lastName': 'Jones'
                                }
                            },
                            'supplierEntities': [
                              {
                                  'id': 8,
                                  'supplierName': 'BP Amoco'
                              }
                            ]
                        }
                    },
                    'dropProducts': [
                      {
                          'id': 755768,
                          'orderNumber': '20889806',
                          'siteId': 601813,
                          'productId': 2,
                          'tankNumber': '1',
                          'tankGuid': '85b9e11a-3baf-4fea-93b2-126090883529',
                          'scheduledTime': 1461585600000,
                          'earliestTime': 1461592800000,
                          'latestTime': 1461614400000,
                          'droppedTime': 1461601320000,
                          'dropDuration': 30,
                          'grossQty': 8999,
                          'netQty': 9035,
                          'orderQty': 9000,
                          'dispatchedQty': 9000,
                          'driverStatus': 'DEPARTED',
                          'winterAdditiveFlag': false,
                          'splitDropFlag': false,
                          'sourceLiftSequenceNumber': '1',
                          'dispatchProductId': 2,
                          'product': null,
                          'dropproductStick': {
                            'id': 603590,
                            'dropproductId': 755768,
                            'fuelStart': null,
                            'waterStart': null,
                            'fuelEnd': null,
                            'waterEnd': null,
                            'lastUpdateTime': 1461718842474
                        }
                      }
                    ],
                    'liftProducts': [
                      {
                          'id': 751354,
                          'orderNumber': '20889806',
                          'productId': 2,
                          'contractName': 'AOC - BP Unbranded',
                          'contractGuid': 'e03d707c-fd5f-4e4d-8bc0-2d6bea39af92',
                          'sequenceNumber': '1',
                          'terminalId': 'T38MI3005',
                          'supplierId': 8,
                          'loadingNumber': 'BP (U)',
                          'orderQty': 9000,
                          'dispatchedQty': 9000,
                          'liftproductDetails': [
                            {
                                'id': 681995,
                                'liftproductId': 751354,
                                'bolNumber': '399695',
                                'grossQty': 8999,
                                'netQty': 9035,
                                'liftTime': 1461597840000,
                                'liftDuration': null
                            }
                        ],
                          'driverStatus': 'DEPARTED',
                          'dispatchTerminalId': 'T38MI3005',
                          'dispatchSupplierId': 8,
                          'product': null
                      }
                    ],
                    'orderSiteTimes': [
                      {
                          'id': 618622,
                          'orderNumber': '20889806',
                          'siteNumber': '74267',
                          'fromDriverId': null,
                          'arrivalTime': 1460714400000,
                          'departTime': 1460714460000,
                          'comment': null,
                          'longitude': null,
                          'latitude': null,
                          'waittime': 1,
                          'waitreason': ''
                      }
                    ],
                    'orderTerminalTimes': [
                      {
                          'id': 622600,
                          'orderNumber': '20889806',
                          'terminalId': 'T38MI3005',
                          'fromDriverId': null,
                          'arrivalTime': 1460710800000,
                          'departTime': 1460710860000,
                          'comment': '',
                          'longitude': null,
                          'latitude': null,
                          'waittime': 1,
                          'waitreason': '',
                          'sequenceNumber': '1'
                      }
                    ],
                    'orderDocumentStores': [],
                    'statusType': null,
                    'statusMessage': null
                },
                'carrierPaymentProdChargesList': [
                    {
                        'id': 630470,
                        'carrierPaymentId': 611999,
                        'contractId': 604254,
                        'bolNumber': null,
                        'productId': 2,
                        'productName': 'Unleaded 87 Unbranded Ethanol 10.0%',
                        'grossQty': 8999,
                        'baseRate': 0.0156,
                        'totalProdCharges': 140.38,
                        'winterAdditiveCharges': null,
                        'minVolumeCharge': null,
                        'minVolumeRate': null,
                        'minVolumeQty': null
                    }
                  ],
                'carrierPaymentChargesList': [
                    {
                        'id': 610939,
                        'carrierPaymentId': 611999,
                        'contractId': null,
                        'fscPercentage': 8.75,
                        'fscCharges': 12.28,
                        'tollCharges': null,
                        'splitStopCharges': null,
                        'demurrageCharges': null,
                        'pumpCharges': null,
                        'winterAdditiveCharges': null,
                        'totalVolumeCharges': 140.38,
                        'deliveryFee': null,
                        'insurencePercentage': 0,
                        'insurenceCharge': null
                    }
                  ],
                'carrierPaymentDocsList': [],
                'carrierPaymentAdnlCharges': [],
                'actions': 'SUBMIT',
                'message': 'New',
                'editable': true,
                'alert': null,
                'recalculate': true,
                'primaryFlag': true
            }
        };
    }
})();
