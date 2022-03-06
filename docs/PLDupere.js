$(document).ready(function() {
  
    $("#Home").click(function(){
        $("#Ligne0").css("display", "block");
        $("#Ligne1").css("display", "none");
        $("#Ligne2").css("display", "none");
        $("#Ligne3").css("display", "none");
        $("#Ligne4").css("display", "none");
        $("#Ligne5").css("display", "none");
        $("#Ligne6").css("display", "none");
      }); 
      $("#Extra").click(function(){
        var answer = prompt("Un peu de sport cérébral !?! \u000A si : 2 + 3 = 10 \u000A 7 + 2 = 63 \u000A 6 + 5 = 66 \u000A 8 + 4 = 96 \u000A Nous aurons donc : \u000A 9 + 7 = ?");
        if (answer == 144) {
          $("#Ligne6").css("display", "block");
          alert("Félicitation !!!");
        }else{
          alert("Essayer de nouveau...");
        }
    });

      $("#Formation").click(function(){
        //Visibility
        $("#Ligne0").css("display", "none");
        $("#Ligne1").css("display", "block");
        $("#Ligne2").css("display", "none");
        $("#Ligne3").css("display", "none");
        $("#Ligne4").css("display", "none");
        $("#Ligne5").css("display", "none");
        $("#Ligne6").css("display", "none");
        //Ligne1_A
        $("#L1_1H").text("CEGEP de Rivière-du-Loup");
        $("#L1_1I").attr("src","./img/Organisations/CEGEP RDL.jpg");
        $("#L1_1T").text("Technologie de l'électronique industrielle");
        $("#L1_1B").text("");
        const cegepRDL = ["Participer à la conception et l’élaboration de systèmes servant au contrôle de l'énergie électrique, à la commande et l'automatisation de procédés industriels", 
        "Produire des plans à l'aide de logiciels", 
        "Programmer des automates programmables et des robots industriels", 
        "Programmer des systèmes de supervision et d'acquisition de données", 
        "Régler le fonctionnement de boucles de contrôle (température, pression, niveau, débit, etc.)", 
        "Installer et mettre en service des systèmes automatisée", 
        "Dépanner et effectuer la maintenance préventive d’équipements industriels", 
        ];
        for (let i = 0; i < cegepRDL.length; i++) {
          var item = document.createElement("li");
          item.textContent = cegepRDL[i];
          var list = document.getElementById("L1_1B");
          list.appendChild(item);  
        }
        $("#L1_1L").attr("href","https://www.cegeprdl.ca/futurs-etudiants/programmes/programmes-techniques/electronique-industrielle/");
        
        //Ligne1_B
        $("#L1_2H").text("*** Pas terminé *** Université du Québec à Rimouski");
        $("#L1_2I").attr("src","./img/Organisations/UQAR.jpg");
        $("#L1_2T").text("Majeure en informatique");
        $("#L1_2B").text("");
        const uqarINF = ["Utilisation des langages de programmation", 
        "Résolution de problèmes d’informatique grâce aux mathématiques", 
        "Déploiement d’un réseau informatique", 
        "Exploitation des principes de la programmation orientée objet", 
        "Exploitation d’un système de gestion de base de données", 
        "Opérations de prévention en matière de sécurité de l’information", 
        "Installation et gestion de composants logiciels et matériels", 
        "Concevoir des sites Web en utilisant des technologies de commerce électronique", 
        "Réaliser des projets en utilisant la méthodologie Agile", 
        ];
        for (let i = 0; i < uqarINF.length; i++) {
          var item = document.createElement("li");
          item.textContent = uqarINF[i];
          var list = document.getElementById("L1_2B");
          list.appendChild(item);
        }
        $("#L1_2L").attr("href","https://www.uqar.ca/etudes/etudier-a-l-uqar/programmes-d-etudes/6833/")
      });
      //------------------------------------------------------------------------------------------------------------------------------- 
      $("#Experience").click(function(){
        //Visibility
        $("#Ligne0").css("display", "none");
        $("#Ligne1").css("display", "block");
        $("#Ligne2").css("display", "block");
        $("#Ligne3").css("display", "none");
        $("#Ligne4").css("display", "none");
        $("#Ligne5").css("display", "none");
        $("#Ligne6").css("display", "none");
        //Ligne1_A
        $("#L1_1H").text("Bradken");
        $("#L1_1I").attr("src","./img/Organisations/BKN.jpg");
        $("#L1_1T").text("Contremaître Maintenance / Automatisation");
        $("#L1_1B").text("");
        const bkn = ["Mise en place du département d’automation chez Bradken", 
        "Principal responsable pour administrer les défaillances et appliquer les mesures correctives en automation et instrumentation", 
        "Gestion du personnel et du matériel en fonction des priorités opérationnelles  ", 
        "Administration des protocoles de communication et de réseautique industrielle", 
        "Programmation d’automate, de robot industriel et d’interface opérateur", 
        "Acquisition, gestion, analyse de données et Internet of Things", 
        "Faire les analyses de défaillance et s’assure des mesures correctives", 
        "Modification d’équipement et mise à jour de plan électrique", 
        "Maintenance préventive par thermographie, analyse vibratoire et échantillon d’huile", 
        "Entretien d’équipement de puissance (ABP induction) et les sous-stations électriques", 
        "Agir à titre de personne ressource auprès des employés de métier", 
        ];
        for (let i = 0; i < bkn.length; i++) {
          var item = document.createElement("li");
          item.textContent = bkn[i];
          var list = document.getElementById("L1_1B");
          list.appendChild(item);
        }
        $("#L1_1L").attr("href","https://bradken.com/");
        //Ligne1_B
        $("#L1_2H").text("Rio Tinto, Iron ore compagnie of Canada, Chemin fer QNS&L");
        $("#L1_2I").attr("src","./img/Organisations/RT-IOC-QNSL.jpg");
        $("#L1_2T").text("Opérateur / réparateur électrique 2");
        $("#L1_2B").text("");
        const ioc = ["Effectuer le dépannage, l’entretien préventif et l’installation d’appareils électriques", 
        "Diagnostiquer des systèmes de contrôle et d’automatisation ferroviaire", 
        "Maintenance des équipements de signalisation et de communication (AREMA S&C) selon les instructions générales (GI)", 
        "S’assurer du fonctionnement d’équipement informatique et du réseau de communication", 
        "Installation de force électromotrice et paramétrage du contrôle du mouvement", 
        "Vérifier les éléments de mesure, de contrôle, d’équipement hydraulique et pneumatique", 
        "Optimisation de ressources matérielles et gestion du temps", 
        "Réalisation et conception de projet conjointement avec l'ingénierie", 
        ];
        for (let i = 0; i < ioc.length; i++) {
          var item = document.createElement("li");
          item.textContent = ioc[i];
          var list = document.getElementById("L1_2B");
          list.appendChild(item);
        }
        $("#L1_2L").attr("href","https://www.ironore.ca/en/");
        //Ligne2_A
        $("#L2_1H").text("Papier Whith Birch division F.F Soucy");
        $("#L2_1I").attr("src","./img/Organisations/FFSoucy.jpg");
        $("#L2_1T").text("Technicien en électro-instrumentation");
        $("#L2_1B").text("");
        const ffs = ["Mise à exécution des notions d’apprentissages typiques de la réalité du métier", 
        "Installer, réparer, modifier, calibrer, ajuster et entretenir tous types d’équipements électroniques et d’instrumentation mécanique et pneumatique", 
        "Diagnostiquant et résolvant les problèmes d’ordre électrique et d'instrumentation contrôle", 
        "Remettre en fonction les équipements de l’usine", 
        "Entretien préventif des équipements pour assurer l’efficacité de l’usine", 
        "Effectue de la programmation de systèmes distribués (DCS) et d’automates", 
        "Entretien des démarreurs, drives DC et AC et des moteurs électriques", 
        ];
        for (let i = 0; i < ffs.length; i++) {
          var item = document.createElement("li");
          item.textContent = ffs[i];
          var list = document.getElementById("L2_1B");
          list.appendChild(item);
        }
        $("#L2_1L").attr("href","https://whitebirchpaper.com/");
        //Ligne2_B
        $("#L2_2H").text("Ministère de la défence national");
        $("#L2_2I").attr("src","./img/Organisations/FC.jpg")
        $("#L2_2T").text("Caporal-chef d’infanterie");
        $("#L2_2B").text("");
        const fc = ["Apprendre la discipline et le contrôle de soi", 
        "Développer le sens des responsabilités et comprendre les objectifs", 
        "Prise en charge de personnel ainsi que sa gestion", 
        "Donner de la formation", 
        "Formation en leadership", 
        "Capacité à communiquer devant un groupe", 
        ];
        for (let i = 0; i < fc.length; i++) {
          var item = document.createElement("li");
          item.textContent = fc[i];
          var list = document.getElementById("L2_2B");
          list.appendChild(item);
        }
        $("#L2_2L").attr("href","https://forces.ca/en/career/infantry-soldier/");
      }); 
      // -----------------------------------------------------------------------------------------------------------------------------
      $("#Qualification").click(function(){
        //Visibility
        $("#Ligne0").css("display", "none");
        $("#Ligne1").css("display", "block");
        $("#Ligne2").css("display", "block");
        $("#Ligne3").css("display", "block");
        $("#Ligne4").css("display", "none");
        $("#Ligne5").css("display", "none");
        $("#Ligne6").css("display", "none");
        //Ligne1_A
        $("#L1_1H").text("Ministère du Travail, de l'Emploi et de la Solidarité sociale ");
        $("#L1_1I").attr("src","./img/Organisations/EmploiQC.png");
        $("#L1_1T").text("Certificat en électricité (CÉ)");
        $("#L1_1B").text("");
        const licenceC = ["Code de construction du Québec, Chapitre V — Électricité C22.10", 
        "Sécurité en matière d’électricité au travail Z462", 
        "Poser, modifier ou restaurer des composants d’appareillage de branchement et de distribution.", 
        "Remettre en marche l’équipement et les systèmes (courant continu, alternatif, monophasé et triphasé)", 
        "Remplacer les pièces, les composants et l’équipement usés ou désuets", 
        "Mettre en place le câblage, les composants, l’équipement, les systèmes (éclairages, chauffages et autres) et les installations électriques", 
        "Rendre opérationnels les composants, l’équipement, les installations et les systèmes", 
        ];
        for (let i = 0; i < licenceC.length; i++) {
          var item = document.createElement("li");
          item.textContent = licenceC[i];
          var list = document.getElementById("L1_1B");
          list.appendChild(item);
        }
        $("#L1_1L").attr("href","https://www.emploiquebec.gouv.qc.ca/citoyens/developper-et-faire-reconnaitre-vos-competences/qualification-professionnelle/qualification-obligatoire/liste-des-certificats/certificat-en-electricite-ce/");
        //Ligne1_B
        $("#L1_2H").text("Conseil canadien des directeurs de l’apprentissage");
        $("#L1_2I").attr("src","./img/Organisations/sceauRouge.jpg");
        $("#L1_2T").text("Électricien construction (7241)");
        $("#L1_2B").text("");
        const rsConstruction = [" Installer et entretenir les dispositifs de protection, et en faire la maintenance", 
        "Installer et entretenir l’appareillage de distribution, et en faire la maintenance", 
        "Installer et entretenir les systèmes de protection de continuité des masses et de mise à la terre, et en faire la maintenance", 
        "Installer et entretenir les systèmes de production d’énergie, et en faire la maintenance", 
        "Installer et entretenir les systèmes haute tension, et en faire la maintenance", 
        "Installer et entretenir les transformateurs, et en faire la maintenance", 
        ];
        for (let i = 0; i < rsConstruction.length; i++) {
          var item = document.createElement("li");
          item.textContent = rsConstruction[i];
          var list = document.getElementById("L1_2B");
          list.appendChild(item);
        }
        $("#L1_2L").attr("href","https://www.red-seal.ca/trades/c.4nst_.2l.2ctr.3c-fra.html");
         //Ligne2_A
         $("#L2_1H").text("Conseil canadien des directeurs de l’apprentissage");
         $("#L2_1I").attr("src","./img/Organisations/sceauRouge.jpg");
         $("#L2_1T").text("Électricien industriel (7242)");
         $("#L2_1B").text("");
         const rsIndustriel = ["Installer, programmer et entretenir les systèmes de contrôle automatisés, et en faire la maintenance", 
         "Installer et entretenir les démarreurs de moteurs et leurs commandes, et en faire la maintenance", 
         "Installer et entretenir les mécanismes d'entraînement, et en faire la maintenance", 
         "Installer et entretenir les systèmes de signalisation, et en faire la maintenance", 
         "Installer et entretenir les systèmes de communication, et en faire la maintenance", 
         "Installer et entretenir les systèmes de contrôle intégrés, et en faire la maintenance", 
         "Installer et entretenir les systèmes de commande hydrauliques et pneumatiques", 
         ];
         for (let i = 0; i < rsIndustriel.length; i++) {
           var item = document.createElement("li");
           item.textContent = rsIndustriel[i];
           var list = document.getElementById("L2_1B");
           list.appendChild(item);
         }
         $("#L2_1L").attr("href","https://www.red-seal.ca/trades/.3nd.5str.3.1l_.2l.2ctr.3c-fra.html");
         //Ligne2_B
         $("#L2_2H").text("Conseil canadien des directeurs de l’apprentissage");
         $("#L2_2I").attr("src","./img/Organisations/sceauRouge.jpg")
         $("#L2_2T").text("Technicien instrumentation et contrôle (2243)");
         $("#L2_2B").text("");
         const rsInstrumentation = ["Installer les dispositifs de pression, de température, de niveau et de débit, et en faire la maintenance", 
         "Installer les transducteurs de signaux et en faire la maintenance", 
         "Installer les dispositifs de mouvement, de vitesse, de positionnement et de vibrations, et en faire la maintenance", 
         "Installer les systèmes de régulation PID et boucle de régulation, analyser le processus et en faire la maintenance.", 
         "Installer les valves, actionneurs, positionneurs et en faire la maintenance", 
         "Installer les systèmes de commande de réseaux et en faire la maintenance", 
         "Installer les automates programmables, système d’acquisition de données SCADA  et en faire la maintenance", 
         ];
         for (let i = 0; i < rsInstrumentation.length; i++) {
           var item = document.createElement("li");
           item.textContent = rsInstrumentation[i];
           var list = document.getElementById("L2_2B");
           list.appendChild(item);
         }
         $("#L2_2L").attr("href","https://www.red-seal.ca/trades/.3ct-fra.html");
        //Ligne3_A
         $("#L3_1H").text("The Snell Group");
         $("#L3_1I").attr("src","./img/Organisations/snell.png");
         $("#L3_1T").text("Certificat de formation Thermographie / Infrarouge");
         $("#L3_1B").text("");
         const snell = ["Systèmes de distribution de l’électricité",
         "Systèmes mécaniques",
         "Matériaux réfractaires",
         "Conduits souterrains",
         "La thermographie active",
         "L’évaluation nondestructive des matériaux",
         "Techniques d’inspection reconnues par l’industrie et à l’internationale."
         ];
         for (let i = 0; i < snell.length; i++) {
           var item = document.createElement("li");
           item.textContent = snell[i];
           var list = document.getElementById("L3_1B");
           list.appendChild(item);
         }
         $("#L3_1L").attr("href","https://www.thesnellgroup.com/certification");
         //Ligne3_B
         $("#L3_2H").text("Mobius Institute");
         $("#L3_2I").attr("src","./img/Organisations/mobius.png")
         $("#L3_2T").text("Certificat de formation Analyse de vibration");
         $("#L3_2B").text("");
         const mobius = ["Principes de vibration",
         "Collecte des données",
         "Traitement du signal",
         "Analyse des vibrations",
         "Réglage des alarmes",
         "Diagnostic de défaults et correctifs",
         "Analyse de la forme d'onde temporelle et tendance du spectre de fréquence"
         ];
         for (let i = 0; i < mobius.length; i++) {
           var item = document.createElement("li");
           item.textContent = mobius[i];
           var list = document.getElementById("L3_2B");
           list.appendChild(item);
         }
         $("#L3_2L").attr("href","https://www.mobiusinstitute.com/certification-requirements/");
         /*
         //Ligne4_A
         $("#L4_1H").text("CEGEP Levis");
         $("#L4_1I").attr("src","./img/Organisations/sceauRouge.jpg");
         $("#L4_1T").text("");
         $("#L4_1B").text("");
         const robotic = [
         ];
         for (let i = 0; i < robotic.length; i++) {
           var item = document.createElement("li");
           item.textContent = robotic[i];
           var list = document.getElementById("L4_1B");
           list.appendChild(item);
         }
         $("#L4_1L").attr("href","https://www.red-seal.ca/trades/.3nd.5str.3.1l_.2l.2ctr.3c-fra.html");
         //Ligne4_B
         $("#L4_2H").text("RA Automation");
         $("#L4_2I").attr("src","./img/Organisations/sceauRouge.jpg")
         $("#L4_2T").text("");
         $("#L4_2B").text("");
         const automation = [
         ];
         for (let i = 0; i < automation.length; i++) {
           var item = document.createElement("li");
           item.textContent = automation[i];
           var list = document.getElementById("L4_2B");
           list.appendChild(item);
         }
         $("#L4_2L").attr("href","https://www.red-seal.ca/trades/.3ct-fra.html");
        //Ligne5_A
        $("#L5_1H").text("Cisco");
        $("#L5_1I").attr("src","./img/Organisations/sceauRouge.jpg");
        $("#L5_1T").text("");
        $("#L5_1B").text("");
        const cisco = [
        ];
        for (let i = 0; i < cisco.length; i++) {
          var item = document.createElement("li");
          item.textContent = cisco[i];
          var list = document.getElementById("L4_1B");
          list.appendChild(item);
        }
        $("#L5_1L").attr("href","https://www.red-seal.ca/trades/.3nd.5str.3.1l_.2l.2ctr.3c-fra.html");
        //Ligne5_B
        $("#L5_2H").text("IBM SQL");
        $("#L5_2I").attr("src","./img/Organisations/sceauRouge.jpg")
        $("#L5_2T").text("");
        $("#L5_2B").text("");
        const abb = [
        ];
        for (let i = 0; i < abb.length; i++) {
          var item = document.createElement("li");
          item.textContent = abb[i];
          var list = document.getElementById("L4_2B");
          list.appendChild(item);
        }
        $("#L5_2L").attr("href","https://www.red-seal.ca/trades/.3ct-fra.html");
        */
      }); 
    //-----
})