import { useState, useEffect } from 'react';
import { Activity, Server, Radio, ShieldCheck, Zap, Thermometer, Wifi, RefreshCw } from 'lucide-react';

export default function NocTopologyPreview({ lang = 'en', t }) {
  const [activeTab, setActiveTab] = useState('topology'); // 'topology' | 'noc' | 'perimeter'
  const [selectedNode, setSelectedNode] = useState('rumaila');
  const [packetTick, setPacketTick] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPacketTick((p) => (p + 1) % 100);
    }, 1200);
    return () => clearInterval(timer);
  }, []);

  const nodes = [
    {
      id: 'baghdad',
      name: t.hero.interactiveConsole.nodes.baghdad,
      role: lang === 'ar' ? 'المركز الرئيسي ومجمع الخوادم TIA-942' : 'Central Data Center & Operations Core',
      x: 180,
      y: 70,
      latency: '1.8 ms',
      throughput: '10.0 Gbps Dark Fiber',
      ambientTemp: '21.4°C Internal',
      powerState: 'N+1 Dual UPS 100%',
      uplink: 'Primary Ring Active',
      status: 'NORMAL',
    },
    {
      id: 'rumaila',
      name: t.hero.interactiveConsole.nodes.rumaila,
      role: lang === 'ar' ? 'عقدة حقل الرميلة — محطة معالجة نفطية' : 'Oilfield Processing Node — Zone 1 ATEX',
      x: 360,
      y: 190,
      latency: '16.4 ms',
      throughput: '1.2 Gbps Armored Fiber',
      ambientTemp: '51.2°C Ambient / 22.0°C Chilled',
      powerState: 'Solar + ATS + Gen Buffer',
      uplink: 'Fiber + Microwave Failover',
      status: 'NORMAL',
    },
    {
      id: 'zubair',
      name: t.hero.interactiveConsole.nodes.zubair,
      role: lang === 'ar' ? 'منشأة الزبير — أمن المحيط ومراقبة الصمامات' : 'Zubair Facility — Perimeter & SCADA Hub',
      x: 470,
      y: 130,
      latency: '18.1 ms',
      throughput: '850 Mbps Microwave Link',
      ambientTemp: '49.8°C Ambient / 23.1°C Chilled',
      powerState: 'Dual Industrial UPS',
      uplink: 'Redundant Microwave Active',
      status: 'NORMAL',
    },
    {
      id: 'basra',
      name: t.hero.interactiveConsole.nodes.basra,
      role: lang === 'ar' ? 'بوابة الميناء — التفتيش الجمركي واللوجستي' : 'Marine Terminal — ALPR & Radar Perimeter',
      x: 520,
      y: 240,
      latency: '19.8 ms',
      throughput: '2.5 Gbps Fiber Backbone',
      ambientTemp: '46.0°C / Marine Humidity',
      powerState: 'Grid + Instant Generator',
      uplink: 'Direct Marine Link',
      status: 'NORMAL',
    },
  ];

  const activeNodeData = nodes.find((n) => n.id === selectedNode) || nodes[1];

  return (
    <div className="noc-console-card">
      {/* Console Header Bar */}
      <div className="noc-console-header">
        <div className="noc-header-left">
          <span className="noc-live-indicator" aria-hidden="true"></span>
          <span className="noc-title">{t.hero.interactiveConsole.title}</span>
          <span className="noc-meta-status">{t.hero.interactiveConsole.status}</span>
        </div>
        <div className="noc-console-tabs" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'topology'}
            className={`noc-tab-btn ${activeTab === 'topology' ? 'active' : ''}`}
            onClick={() => setActiveTab('topology')}
          >
            {t.hero.interactiveConsole.tabs.topology}
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'noc'}
            className={`noc-tab-btn ${activeTab === 'noc' ? 'active' : ''}`}
            onClick={() => setActiveTab('noc')}
          >
            {t.hero.interactiveConsole.tabs.noc}
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'perimeter'}
            className={`noc-tab-btn ${activeTab === 'perimeter' ? 'active' : ''}`}
            onClick={() => setActiveTab('perimeter')}
          >
            {t.hero.interactiveConsole.tabs.perimeter}
          </button>
        </div>
      </div>

      {/* Main Console Viewport */}
      <div className="noc-console-body">
        {activeTab === 'topology' && (
          <div className="noc-topology-view">
            <div className="noc-svg-container">
              <svg viewBox="0 0 600 300" className="noc-topology-svg" aria-label="Network Topology Interactive Map">
                <defs>
                  <linearGradient id="fiberGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#28a8e0" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#76c9e8" stopOpacity="0.3" />
                  </linearGradient>
                  <filter id="glowEffect" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Grid guidelines */}
                <line x1="60" y1="150" x2="540" y2="150" stroke="rgba(40,168,224,0.06)" strokeDasharray="4 4" />
                <line x1="300" y1="30" x2="300" y2="270" stroke="rgba(40,168,224,0.06)" strokeDasharray="4 4" />

                {/* Primary Fiber Trunk Lines */}
                {/* Baghdad -> Rumaila */}
                <line
                  x1={nodes[0].x}
                  y1={nodes[0].y}
                  x2={nodes[1].x}
                  y2={nodes[1].y}
                  stroke="url(#fiberGlow)"
                  strokeWidth="2.5"
                  filter="url(#glowEffect)"
                />
                {/* Baghdad -> Zubair (Microwave / redundant route) */}
                <line
                  x1={nodes[0].x}
                  y1={nodes[0].y}
                  x2={nodes[2].x}
                  y2={nodes[2].y}
                  stroke="rgba(118,201,232,0.4)"
                  strokeWidth="1.5"
                  strokeDasharray="6 4"
                />
                {/* Rumaila -> Zubair */}
                <line
                  x1={nodes[1].x}
                  y1={nodes[1].y}
                  x2={nodes[2].x}
                  y2={nodes[2].y}
                  stroke="url(#fiberGlow)"
                  strokeWidth="2"
                />
                {/* Zubair -> Basra Marine Gateway */}
                <line
                  x1={nodes[2].x}
                  y1={nodes[2].y}
                  x2={nodes[3].x}
                  y2={nodes[3].y}
                  stroke="url(#fiberGlow)"
                  strokeWidth="2"
                />
                {/* Rumaila -> Basra Marine Gateway */}
                <line
                  x1={nodes[1].x}
                  y1={nodes[1].y}
                  x2={nodes[3].x}
                  y2={nodes[3].y}
                  stroke="rgba(40,168,224,0.3)"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />

                {/* Animated Packet Pulses */}
                <circle
                  cx={nodes[0].x + (nodes[1].x - nodes[0].x) * (packetTick / 100)}
                  cy={nodes[0].y + (nodes[1].y - nodes[0].y) * (packetTick / 100)}
                  r="3.5"
                  fill="#76c9e8"
                  filter="url(#glowEffect)"
                />
                <circle
                  cx={nodes[1].x + (nodes[3].x - nodes[1].x) * (((packetTick + 40) % 100) / 100)}
                  cy={nodes[1].y + (nodes[3].y - nodes[1].y) * (((packetTick + 40) % 100) / 100)}
                  r="3"
                  fill="#28a8e0"
                />

                {/* Render Topology Nodes */}
                {nodes.map((node) => {
                  const isSelected = selectedNode === node.id;
                  return (
                    <g
                      key={node.id}
                      onClick={() => setSelectedNode(node.id)}
                      style={{ cursor: 'pointer' }}
                      tabIndex={0}
                      role="button"
                      aria-label={`Select node ${node.name}`}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          setSelectedNode(node.id);
                        }
                      }}
                    >
                      {/* Pulse ring for selected */}
                      {isSelected && (
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r="22"
                          fill="none"
                          stroke="#28a8e0"
                          strokeWidth="1.5"
                          strokeOpacity="0.6"
                          className="noc-pulse-ring"
                        />
                      )}
                      {/* Outer node shield */}
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r="14"
                        fill={isSelected ? '#182733' : '#101a22'}
                        stroke={isSelected ? '#28a8e0' : 'rgba(40,168,224,0.4)'}
                        strokeWidth={isSelected ? '2' : '1.5'}
                      />
                      {/* Core light */}
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r="5"
                        fill={isSelected ? '#76c9e8' : '#28a8e0'}
                      />
                      {/* Node Label Text */}
                      <text
                        x={node.x}
                        y={node.y > 150 ? node.y + 26 : node.y - 18}
                        textAnchor="middle"
                        fill={isSelected ? '#ffffff' : '#94a3b8'}
                        fontSize="11"
                        fontFamily="Cairo, sans-serif"
                        fontWeight={isSelected ? '700' : '500'}
                      >
                        {node.name.split('—')[0]}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Selected Node Telemetry Strip */}
            <div className="noc-node-detail-strip">
              <div className="noc-detail-col">
                <span className="noc-detail-label">{lang === 'ar' ? 'العقدة المحددة' : 'Active Facility Node'}</span>
                <span className="noc-detail-val font-semibold text-white">{activeNodeData.name}</span>
                <span className="noc-detail-sub text-muted">{activeNodeData.role}</span>
              </div>
              <div className="noc-detail-col">
                <span className="noc-detail-label">{t.hero.interactiveConsole.latency}</span>
                <span className="noc-detail-val text-cyan">{activeNodeData.latency}</span>
                <span className="noc-detail-sub text-muted">{t.hero.interactiveConsole.healthy}</span>
              </div>
              <div className="noc-detail-col">
                <span className="noc-detail-label">{t.hero.interactiveConsole.throughput}</span>
                <span className="noc-detail-val text-white">{activeNodeData.throughput}</span>
                <span className="noc-detail-sub text-muted">{activeNodeData.uplink}</span>
              </div>
              <div className="noc-detail-col">
                <span className="noc-detail-label">{t.hero.interactiveConsole.temp}</span>
                <span className="noc-detail-val text-cyan">{activeNodeData.ambientTemp}</span>
                <span className="noc-detail-sub text-muted">{activeNodeData.powerState}</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'noc' && (
          <div className="noc-metrics-grid">
            <div className="noc-metric-card">
              <div className="noc-metric-head">
                <Server size={18} className="text-cyan" />
                <span>{lang === 'ar' ? 'قاعات الخوادم ومراكز البيانات' : 'TIA-942 Server Hall State'}</span>
              </div>
              <div className="noc-metric-stat">99.999%</div>
              <div className="noc-metric-desc">
                {lang === 'ar'
                  ? 'ثلاث قاعات خوادم رئيسية تعمل بتبريد دقيق وعزل الممرات الباردة N+1'
                  : '3 Primary server halls online with precision cooling & N+1 cold-aisle isolation.'}
              </div>
            </div>

            <div className="noc-metric-card">
              <div className="noc-metric-head">
                <Zap size={18} className="text-cyan" />
                <span>{lang === 'ar' ? 'استقرار التغذية الكهربائية والـ UPS' : 'Dual Power Bus & ATS State'}</span>
              </div>
              <div className="noc-metric-stat">230V · 50Hz</div>
              <div className="noc-metric-desc">
                {lang === 'ar'
                  ? 'أنظمة الطاقة غير المنقطعة في وضع الجاهزية 100% مع مولدات ديزل صناعية فورية'
                  : 'Dual industrial modular UPS on float charge with 0ms transition ATS and reserve generators.'}
              </div>
            </div>

            <div className="noc-metric-card">
              <div className="noc-metric-head">
                <Thermometer size={18} className="text-cyan" />
                <span>{lang === 'ar' ? 'المناخ الصحراوي والحماية الحرارية' : 'ATEX Extreme Thermal Telemetry'}</span>
              </div>
              <div className="noc-metric-stat">52.4°C max</div>
              <div className="noc-metric-desc">
                {lang === 'ar'
                  ? 'الحافظات الخارجية IP67 تعمل في حقول الرميلة والزبير مع فلاتر الرمال النشطة'
                  : 'Field enclosures sealed to IP67 operating in Rumaila field under active dust purging.'}
              </div>
            </div>

            <div className="noc-metric-card">
              <div className="noc-metric-head">
                <ShieldCheck size={18} className="text-cyan" />
                <span>{lang === 'ar' ? 'عزل سكادا والأمن السيبراني' : 'SCADA Air-Gap & SIEM Status'}</span>
              </div>
              <div className="noc-metric-stat">IEC 62443</div>
              <div className="noc-metric-desc">
                {lang === 'ar'
                  ? 'عزل شبكات التحكم الصناعي عن الإنترنت مع فحص حزم البيانات بالزمن الحقيقي'
                  : 'Industrial control networks isolated via unidirectional data diodes and 24/7 SIEM monitoring.'}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'perimeter' && (
          <div className="noc-metrics-grid">
            <div className="noc-metric-card">
              <div className="noc-metric-head">
                <ShieldCheck size={18} className="text-cyan" />
                <span>{lang === 'ar' ? 'البوابات الإلكترونية والمصدات الهيدروليكية' : 'Crash-Rated Speed Gates & Bollards'}</span>
              </div>
              <div className="noc-metric-stat">ARMED (K12/M50)</div>
              <div className="noc-metric-desc">
                {lang === 'ar'
                  ? 'منظومة الحواجز الهيدروليكية للمدخل الرئيسي مفعلة مع أزمنة فتح تقل عن 2 ثانية للمركبات المصرحة'
                  : 'Hydraulic bollards and automated anti-ram gate arrays fully interlocked with access credentialing.'}
              </div>
            </div>

            <div className="noc-metric-card">
              <div className="noc-metric-head">
                <Radio size={18} className="text-cyan" />
                <span>{lang === 'ar' ? 'كاميرات تمييز اللوحات (ALPR/LPR)' : 'ANPR / License Plate Recognition'}</span>
              </div>
              <div className="noc-metric-stat">99.82% Match</div>
              <div className="noc-metric-desc">
                {lang === 'ar'
                  ? 'قراءة اللوحات العراقية الرسمية بدقة ليلية ونهارية مع الربط التلقائي بقواعد بيانات التصاريح'
                  : 'High-speed dual-lane plate recognition with instant whitelist checking against field security registry.'}
              </div>
            </div>

            <div className="noc-metric-card">
              <div className="noc-metric-head">
                <Activity size={18} className="text-cyan" />
                <span>{lang === 'ar' ? 'المراقبة الحرارية وكشف التسلل' : 'Thermal Radar & Long-Range Optics'}</span>
              </div>
              <div className="noc-metric-stat">3.5 km Range</div>
              <div className="noc-metric-desc">
                {lang === 'ar'
                  ? 'رادارات كشف المحيط مع كاميرات حرارية PTZ لتتبع أي حركة مشبوهة في العواصف الترابية'
                  : 'Coordinated radar sweep with PTZ thermal tracking for perimeter defense through sandstorms and zero light.'}
              </div>
            </div>

            <div className="noc-metric-card">
              <div className="noc-metric-head">
                <Wifi size={18} className="text-cyan" />
                <span>{lang === 'ar' ? 'البصمة الحيوية وبوابات التفتيش' : 'Multi-Factor Biometrics & Turnstiles'}</span>
              </div>
              <div className="noc-metric-stat">&lt; 0.4s Verification</div>
              <div className="noc-metric-desc">
                {lang === 'ar'
                  ? 'بوابات دوارة فولاذية مزودة بقارئات الوجه والبصمة وبطاقات RFID المشفرة مع نظام حضور متزامن'
                  : 'Stainless steel turnstile arrays with anti-tailgating sensors and contactless facial biometric verification.'}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer live status bar */}
      <div className="noc-console-footer">
        <div className="noc-footer-item">
          <span className="noc-footer-dot"></span>
          <span>{lang === 'ar' ? 'روابط الألياف الضوئية الرئيسية: نشطة ومزدوجة' : 'Primary Fiber Ring: Active & Redundant'}</span>
        </div>
        <div className="noc-footer-item">
          <RefreshCw size={13} className="noc-spin text-cyan" />
          <span>{lang === 'ar' ? 'تحديث قياسات الحقول النفطية: متزامن بالثواني' : 'Field Telemetry Sync: 1.2s Real-time'}</span>
        </div>
        <div className="noc-footer-item text-muted">
          <span>TIA-942 · ISO 27001 · ATEX Zone 1/2</span>
        </div>
      </div>
    </div>
  );
}
