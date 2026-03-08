export const generateTasks = (userData) => {
    if (!userData) return [];
    const tasks = [];

    const province = userData.province || "";
    const purpose = userData.purpose || "";
    const status = userData.status || "";

    // ─── URGENT ───────────────────────────────────────────────

    tasks.push({
        id: "sin",
        category: "Urgent",
        title: "Apply for SIN Number",
        description: `Visit a Service Canada office with your ${purpose === "study" ? "study permit" : purpose === "work" ? "work permit" : "immigration documents"}. You need this for almost everything else.`,
        done: false,
    });

    tasks.push({
        id: "sim",
        category: "Urgent",
        title: "Get a Local SIM Card",
        description: "Get a Canadian phone number so you can receive verification texts and calls. Try Koodo, Fido, or Lucky Mobile for affordable plans.",
        done: false,
    });

    tasks.push({
        id: "accommodation",
        category: "Urgent",
        title: "Confirm Accommodation",
        description: "Make sure your temporary or permanent housing is confirmed for your first nights.",
        done: false,
    });

    tasks.push({
        id: "health_card",
        category: "Urgent",
        title: "Apply for Provincial Health Card",
        description: `Apply for ${province === "Ontario" ? "OHIP (Ontario Health Insurance Plan)" :
                province === "British Columbia" ? "BC Services Card (MSP)" :
                    province === "Alberta" ? "AHCIP (Alberta Health Care Insurance Plan)" :
                        province === "Quebec" ? "RAMQ (Régie de l'assurance maladie du Québec)" :
                            province === "Manitoba" ? "Manitoba Health" :
                                province === "Saskatchewan" ? "Saskatchewan Health Card" :
                                    province === "Nova Scotia" ? "MSI (Medical Services Insurance)" :
                                        province === "New Brunswick" ? "New Brunswick Medicare" :
                                            province === "Prince Edward Island" ? "PEI Health Card" :
                                                province === "Newfoundland and Labrador" ? "MCP (Medical Care Plan)" :
                                                    "your provincial health card"
            }. Note there is usually a 3-month waiting period — consider interim private insurance.`,
        done: false,
    });

    // ─── FIRST WEEK ───────────────────────────────────────────

    tasks.push({
        id: "bank",
        category: "First Week",
        title: "Open a Bank Account",
        description: `Bring your passport and proof of address. ${province === "Quebec" ? "Try Desjardins, BMO, or TD — all offer newcomer accounts." :
                "Most major banks like TD, RBC, and Scotiabank offer newcomer accounts with no fees."
            }`,
        done: false,
    });

    tasks.push({
        id: "transit",
        category: "First Week",
        title: "Get a Transit Card",
        description: `Get a ${province === "Ontario" ? "PRESTO card — works on TTC, GO Transit, and most Ontario transit systems" :
                province === "British Columbia" ? "Compass card — works on TransLink buses, SkyTrain, and SeaBus" :
                    province === "Alberta" ? "local transit card — Edmonton uses ETS and Calgary uses CT" :
                        province === "Quebec" ? "OPUS card — works on STM buses and metro in Montreal" :
                            province === "Manitoba" ? "Winnipeg Transit card" :
                                province === "Nova Scotia" ? "Halifax Transit card" :
                                    "local transit card"
            } to get around the city.`,
        done: false,
    });

    if (purpose === "study") {
        tasks.push({
            id: "uni_reg",
            category: "First Week",
            title: "Register with Your Institution",
            description: "Complete enrollment, get your student ID, set up your student email, and find out about orientation events.",
            done: false,
        });
        tasks.push({
            id: "student_health",
            category: "First Week",
            title: "Apply for Student Health Insurance",
            description: "Most universities offer extended health and dental coverage through student unions. Check your school's health plan.",
            done: false,
        });
    }

    if (userData.housing) {
        tasks.push({
            id: "housing",
            category: "First Week",
            title: "Find Permanent Housing",
            description: `Try ${province === "Ontario" ? "Kijiji, PadMapper, or 211 Ontario" :
                    province === "British Columbia" ? "Craigslist, BC Housing, or local settlement agencies" :
                        province === "Quebec" ? "Kijiji, LogisNeuf, or local CLSC resources" :
                            "Kijiji or local settlement agencies"
                } for listings and housing support.`,
            done: false,
        });
    }

    if (userData.children && userData.childrenDetails?.length > 0) {
        tasks.push({
            id: "school",
            category: "First Week",
            title: "Enroll Children in School",
            description: `Contact your local school board to begin enrollment. ${province === "Quebec" ? "French-language schooling is mandatory for most newcomer children in Quebec." :
                    province === "Ontario" ? "English and French immersion options are available through your local school board." :
                        "Public schooling is free for all children in Canada."
                }`,
            done: false,
        });
    }

    // ─── FIRST MONTH ──────────────────────────────────────────

    tasks.push({
        id: "library",
        category: "First Month",
        title: "Get a Library Card",
        description: "Free access to books, internet, community programs, and language learning tools like Mango Languages.",
        done: false,
    });

    tasks.push({
        id: "taxes",
        category: "First Month",
        title: "Learn About Canadian Taxes",
        description: `Understand your tax obligations as a newcomer in ${province || "Canada"}. Keep all receipts. File your first return even if you have no income — it unlocks benefits like GST/HST credits.`,
        done: false,
    });

    tasks.push({
        id: "family_doctor",
        category: "First Month",
        title: "Register with a Family Doctor",
        description: `Use ${province === "Ontario" ? "Health811 or the Health Care Connect program" :
                province === "British Columbia" ? "the BC College of Physicians Find a Doctor tool" :
                    province === "Alberta" ? "the Alberta Health Services doctor finder" :
                        province === "Quebec" ? "the Guichet d'accès à la première ligne (GAP)" :
                            "your province's doctor finder"
            } to register with a family doctor.`,
        done: false,
    });

    if (userData.personal?.daycare) {
        tasks.push({
            id: "daycare",
            category: "First Month",
            title: "Find Daycare Centers",
            description: `Canada has a $10/day childcare program. ${province === "Quebec" ? "Quebec's CPE system offers subsidized childcare — apply through the MFA waitlist." :
                    province === "Ontario" ? "Search Ontario's child care registry at Ontario.ca to find subsidized spots." :
                        "Search Canada.ca or local agencies for subsidized daycare in your area."
                }`,
            done: false,
        });
    }

    if (userData.personal?.legal) {
        tasks.push({
            id: "legal",
            category: "First Month",
            title: "Get Legal Aid",
            description: `Contact ${province === "Ontario" ? "Legal Aid Ontario (legalaid.on.ca)" :
                    province === "British Columbia" ? "Legal Aid BC (legalaid.bc.ca)" :
                        province === "Alberta" ? "Legal Aid Alberta (legalaid.ab.ca)" :
                            province === "Quebec" ? "Aide juridique (Justice.gouv.qc.ca)" :
                                "your local legal aid clinic"
                } for free immigration and settlement legal support.`,
            done: false,
        });
    }

    if (purpose === "work" || purpose === "study") {
        tasks.push({
            id: "credentials",
            category: "First Month",
            title: "Get Foreign Credentials Recognized",
            description: "Contact the relevant regulatory body in your field. Use the Canadian Information Centre for International Credentials (CICIC) to find the right organization.",
            done: false,
        });
    }

    // ─── FIRST 6 MONTHS ───────────────────────────────────────

    if (userData.personal?.settlement) {
        tasks.push({
            id: "community",
            category: "First 6 Months",
            title: "Connect with a Settlement Agency",
            description: `${province === "Ontario" ? "Try ACCES Employment, COSTI, or YMCA Newcomer Services." :
                    province === "British Columbia" ? "Try DIVERSEcity, MOSAIC, or S.U.C.C.E.S.S." :
                        province === "Alberta" ? "Try AISEC, Centre for Newcomers, or Catholic Social Services." :
                            province === "Quebec" ? "Try PROMIS, CARI St-Laurent, or Carrefour d'aide aux nouveaux arrivants." :
                                "Contact your local newcomer centre for free settlement support."
                } All services are free.`,
            done: false,
        });
    }

    tasks.push({
        id: "language",
        category: "First 6 Months",
        title: "Register for Language Classes",
        description: `${province === "Quebec" ? "French classes (FRANA/FRANCISATION) are free and mandatory for settling in Quebec. Register through the Ministère de l'Immigration." :
                "LINC (Language Instruction for Newcomers to Canada) classes are free for eligible newcomers."
            }`,
        done: false,
    });

    tasks.push({
        id: "credit",
        category: "First 6 Months",
        title: "Start Building Credit History",
        description: "Apply for a secured credit card to begin establishing your Canadian credit score. Try the Neo Secured Card or your bank's newcomer credit card.",
        done: false,
    });

    tasks.push({
        id: "drivers",
        category: "First 6 Months",
        title: "Transfer or Get a Driver's License",
        description: `${province === "Ontario" ? "Visit a ServiceOntario location. Some countries have reciprocal agreements with Ontario." :
                province === "British Columbia" ? "Visit an ICBC driver licensing office. Some foreign licenses can be exchanged directly." :
                    province === "Alberta" ? "Visit an Alberta registry agent. Many countries have exchange agreements." :
                        province === "Quebec" ? "Visit a SAAQ service point. You may need to pass a written and road test." :
                            "Check if your home country license can be exchanged or if you need to take a test."
            }`,
        done: false,
    });

    if (userData.personal?.nursing_homes) {
        tasks.push({
            id: "nursing",
            category: "First 6 Months",
            title: "Find Nursing Home Support",
            description: `Contact ${province === "Ontario" ? "the Ontario Long-Term Care Homes Act or call 310-2222" :
                    province === "British Columbia" ? "BC Health Authorities for residential care options" :
                        province === "Quebec" ? "your local CLSC for CHSLD placement support" :
                            "your local health authority"
                } for long-term care options.`,
            done: false,
        });
    }

    if (userData.religion && userData.religion !== "atheist") {
        tasks.push({
            id: "worship",
            category: "First 6 Months",
            title: "Find a Local Place of Worship",
            description: `Connect with your local ${userData.religion === "islam" ? "mosque or Islamic centre" :
                    userData.religion === "hinduism" ? "Hindu temple or cultural centre" :
                        userData.religion === "christianity" ? "church or Christian community" :
                            userData.religion === "sikhism" ? "Gurdwara" :
                                userData.religion === "buddhism" ? "Buddhist temple or meditation centre" :
                                    userData.religion === "judaism" ? "synagogue or Jewish community centre" :
                                        "place of worship"
                } for spiritual support and community connection.`,
            done: false,
        });
    }

    return tasks;
};