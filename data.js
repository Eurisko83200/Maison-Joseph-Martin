var APP_DATA = {
  "scenes": [
    {
      "id": "0-entre",
      "name": "Entrée",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.0793806427157353,
        "pitch": 0.03569904626668041,
        "fov": 1.397892632121691
      },
      "linkHotspots": [
        {
          "yaw": 2.294134812613123,
          "pitch": 0.07179354011075034,
          "rotation": 0,
          "target": "1-tonnelle"
        },
        {
          "yaw": 2.687242141875691,
          "pitch": 0.04847372026589625,
          "rotation": 1.5707963267948966,
          "target": "3-vranda"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-tonnelle",
      "name": "Tonnelle",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.377709281774873,
          "pitch": 0.06980515383768093,
          "rotation": 0,
          "target": "0-entre"
        },
        {
          "yaw": 2.893462994190977,
          "pitch": 0.08904350668139571,
          "rotation": 0,
          "target": "2-passage-vers-terrasse"
        },
        {
          "yaw": -3.137371536725748,
          "pitch": 0.03732777090700168,
          "rotation": 1.5707963267948966,
          "target": "3-vranda"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-passage-vers-terrasse",
      "name": "Passage vers terrasse",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.9334259813257653,
          "pitch": 0.07090908828950226,
          "rotation": 0,
          "target": "1-tonnelle"
        },
        {
          "yaw": 1.423359603323096,
          "pitch": 0.155718075969137,
          "rotation": 0,
          "target": "11-terrasse"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-vranda",
      "name": "Véranda",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.49082344303169556,
          "pitch": -0.021732302651043867,
          "rotation": 0,
          "target": "4-couloir"
        },
        {
          "yaw": 3.128078884864152,
          "pitch": 0.10778324571034048,
          "rotation": 4.71238898038469,
          "target": "1-tonnelle"
        },
        {
          "yaw": 0.5871606414618853,
          "pitch": 0.09689826401433166,
          "rotation": 0,
          "target": "0-entre"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-couloir",
      "name": "Couloir",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.830133511763222,
          "pitch": 0.8779930849614583,
          "rotation": 0,
          "target": "7-passage-couloir-vers-salon"
        },
        {
          "yaw": 1.0339879449394047,
          "pitch": 0.7103427296136307,
          "rotation": 0,
          "target": "5-bureau"
        },
        {
          "yaw": -3.02335841990314,
          "pitch": 0.19107583573756237,
          "rotation": 0,
          "target": "3-vranda"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bureau",
      "name": "Bureau",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8152474398773428,
          "pitch": 0.6651465509301371,
          "rotation": 0,
          "target": "4-couloir"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-salon-centre",
      "name": "Salon centre",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.39150333463623177,
          "pitch": 0.029150414828418292,
          "rotation": 0,
          "target": "11-terrasse"
        },
        {
          "yaw": -0.9795239483320763,
          "pitch": 0.3772405220640991,
          "rotation": 0,
          "target": "10-cuisine-centre"
        },
        {
          "yaw": -1.5394597417141878,
          "pitch": 0.2863352430954862,
          "rotation": 0,
          "target": "7-passage-couloir-vers-salon"
        },
        {
          "yaw": -2.383830041827089,
          "pitch": 0.12028528703380736,
          "rotation": 0,
          "target": "9-salon-derrire-canap"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-passage-couloir-vers-salon",
      "name": "Passage couloir vers salon",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.306441089605464,
          "pitch": 0.28982190518922124,
          "rotation": 0,
          "target": "6-salon-centre"
        },
        {
          "yaw": -2.263581638474246,
          "pitch": 0.6976703059639267,
          "rotation": 0,
          "target": "4-couloir"
        },
        {
          "yaw": 0.7398182123416355,
          "pitch": 0.2690997019843806,
          "rotation": 4.71238898038469,
          "target": "10-cuisine-centre"
        },
        {
          "yaw": 2.3603290339057548,
          "pitch": -0.031734354627513284,
          "rotation": 0,
          "target": "15-couloir-1er-tage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-salon-sous-la-tv",
      "name": "Salon sous la TV",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.03255987926940307,
          "pitch": 0.5567121383329248,
          "rotation": 0,
          "target": "6-salon-centre"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-salon-derrire-canap",
      "name": "Salon derrière canapé",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.491883210014457,
          "pitch": 0.4520026741805516,
          "rotation": 0,
          "target": "6-salon-centre"
        },
        {
          "yaw": 0.7134748090956098,
          "pitch": 0.2631707226550759,
          "rotation": 0,
          "target": "10-cuisine-centre"
        },
        {
          "yaw": 0.32842544401477625,
          "pitch": 0.49496641997243707,
          "rotation": 4.71238898038469,
          "target": "7-passage-couloir-vers-salon"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-cuisine-centre",
      "name": "Cuisine centre",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6675107470729387,
          "pitch": 0.572398088849642,
          "rotation": 0,
          "target": "13-cuisine-four"
        },
        {
          "yaw": 2.331675374026246,
          "pitch": 0.09680539965559021,
          "rotation": 0,
          "target": "14-salle--manger"
        },
        {
          "yaw": 0.5724130974697204,
          "pitch": 0.15304306229789688,
          "rotation": 0,
          "target": "8-salon-sous-la-tv"
        },
        {
          "yaw": 1.6018116834437794,
          "pitch": 0.5314903685193624,
          "rotation": 1.5707963267948966,
          "target": "7-passage-couloir-vers-salon"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-terrasse",
      "name": "Terrasse",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.8154987729431147,
          "pitch": 0.09247041095380126,
          "rotation": 0,
          "target": "2-passage-vers-terrasse"
        },
        {
          "yaw": 2.2923508338961236,
          "pitch": 0.06863493886220517,
          "rotation": 4.71238898038469,
          "target": "12-entre-cuisine"
        },
        {
          "yaw": 1.1670281375997007,
          "pitch": 0.036732768936154514,
          "rotation": 0,
          "target": "6-salon-centre"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-entre-cuisine",
      "name": "Entrée cuisine",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7402458895283424,
          "pitch": 0.6541709122945214,
          "rotation": 0,
          "target": "13-cuisine-four"
        },
        {
          "yaw": -2.9879002771067835,
          "pitch": 0.5259375195869396,
          "rotation": 0,
          "target": "11-terrasse"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-cuisine-four",
      "name": "Cuisine four",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.896645835565195,
          "pitch": 0.25517976800682973,
          "rotation": 0,
          "target": "12-entre-cuisine"
        },
        {
          "yaw": -0.5555097786147805,
          "pitch": 0.6340374292863711,
          "rotation": 0,
          "target": "10-cuisine-centre"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-salle--manger",
      "name": "Salle à manger",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.2723959417057245,
          "pitch": 0.5465264195296484,
          "rotation": 0,
          "target": "10-cuisine-centre"
        },
        {
          "yaw": -2.4005258098209197,
          "pitch": 0.13188971218621504,
          "rotation": 0,
          "target": "12-entre-cuisine"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-couloir-1er-tage",
      "name": "Couloir 1er étage",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.13918846604750534,
          "pitch": 0.3943314070893216,
          "rotation": 3.141592653589793,
          "target": "7-passage-couloir-vers-salon"
        },
        {
          "yaw": 1.4841528726499984,
          "pitch": 0.009097555342979291,
          "rotation": 4.71238898038469,
          "target": "16-chambre-damis"
        },
        {
          "yaw": 2.788138266459999,
          "pitch": 0.16522235502833738,
          "rotation": 4.71238898038469,
          "target": "18-sdb"
        },
        {
          "yaw": -2.757542844823231,
          "pitch": 0.11342919517120009,
          "rotation": 0,
          "target": "17-chambre"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-chambre-damis",
      "name": "Chambre d'amis",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.4207730635059406,
          "pitch": 0.08027646260286225,
          "rotation": 1.5707963267948966,
          "target": "15-couloir-1er-tage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-chambre",
      "name": "Chambre",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.132129405175494,
          "pitch": 0.3140705391010883,
          "rotation": 0,
          "target": "15-couloir-1er-tage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-sdb",
      "name": "SDB",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8954936505794997,
          "pitch": 0.030246841320295204,
          "rotation": 1.5707963267948966,
          "target": "15-couloir-1er-tage"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
