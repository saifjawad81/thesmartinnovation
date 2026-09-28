import { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  FileText, 
  UploadCloud, 
  CheckCircle2, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  ArrowRight, 
  ArrowLeft, 
  MessageSquare, 
  X, 
  AlertCircle 
} from 'lucide-react';

export default function RfpWizard({ lang = 'en', t, initialPillar = 'infrastructure' }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [referenceCode, setReferenceCode] = useState('');
  const [formError, setFormError] = useState('');

  // Form State
  const [formData, setFormData] = useState({
    pillar: initialPillar || 'infrastructure',
    subModules: [],
    location: t.rfp.form.locations[0],
    facilityType: t.rfp.form.facilityTypes[0],
    timeline: t.rfp.form.timelines[0],
    name: '',
    company: '',
    email: '',
    phone: '',
    notes: '',
    attachedFile: null,
  });

  const availableModules = {
    infrastructure: [
      lang === 'ar' ? 'تصميم وبناء قاعات الخوادم TIA-942' : 'TIA-942 Server Room Design & Construction',
      lang === 'ar' ? 'تمديد كابلات الألياف الضوئية المسلحة (OTDR)' : 'Armored Single-Mode Fiber Backbone & OTDR Certification',
      lang === 'ar' ? 'روابط المايكرويف والشبكات اللاسلكية للمجمعات' : 'Licensed Microwave Point-to-Point & Campus Wi-Fi 6/7',
      lang === 'ar' ? 'أنظمة الطاقة غير المنقطعة N+1 والمولدات الصناعية' : 'Modular N+1 UPS Systems & Industrial Generators',
    ],
    security: [
      lang === 'ar' ? 'مصدات هيدروليكية وبوابات أمنية Crash-Rated' : 'Crash-Rated Hydraulic Bollards & Anti-Ram Speed Gates',
      lang === 'ar' ? 'كاميرات مراقبة حرارية وكشف التسلل بالرادار' : 'Thermal Dual-Spectrum CCTV & Radar Intrusion Tracking',
      lang === 'ar' ? 'أنظمة قراءة لوحات المركبات (ALPR / ANPR)' : 'Automatic License Plate Recognition (ALPR)',
      lang === 'ar' ? 'بوابات دوارة بايومترية بالبصمة والوجه' : 'Facial & Fingerprint Biometric Turnstiles & Access Control',
    ],
    cyber_ai: [
      lang === 'ar' ? 'مراقبة أمنية على مدار الساعة (SOC / SIEM)' : '24/7 Security Operations Center (SOC) & SIEM Monitoring',
      lang === 'ar' ? 'عزل وتأمين شبكات سكادا الصناعية (IEC 62443)' : 'Industrial SCADA / DCS Air-Gapping (IEC 62443 Standard)',
      lang === 'ar' ? 'رؤية حاسوبية للسلامة المهنية ومراقبة الشعلات' : 'Computer Vision for PPE Compliance & Flare Stack Monitoring',
      lang === 'ar' ? 'برمجيات مؤسسية مخصصة لإدارة الإنتاج والعمليات' : 'Custom Enterprise Operational Dashboards & Workflows',
    ],
    oilfield: [
      lang === 'ar' ? 'تجهيزات وحافظات كاميرات معتمدة ATEX Zone 1/2' : 'ATEX Zone 1/2 Explosion-Proof Cameras & Junction Enclosures',
      lang === 'ar' ? 'روابط اتصال هجينة فضائية ومايكرويف للحقول' : 'Hybrid Microwave & Satellite Failover Link Architecture',
      lang === 'ar' ? 'أجهزة صلبة مقاومة للحرارة حتى 65 مئوية والرمال' : 'Ruggedized IP67 Enclosures Rated for 65°C Ambient Heat',
      lang === 'ar' ? 'عقد صيانة دورية وفرق تدخل ميدانية مرخصة HSE' : 'Basra-Based HSE Certified Rapid Response Maintenance SLA',
    ]
  };

  const handleSubModuleToggle = (moduleName) => {
    setFormData((prev) => {
      const exists = prev.subModules.includes(moduleName);
      return {
        ...prev,
        subModules: exists
          ? prev.subModules.filter((m) => m !== moduleName)
          : [...prev.subModules, moduleName]
      };
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormError('');
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 25 * 1024 * 1024) {
        setFormError(lang === 'ar' ? 'حجم الملف يتجاوز 25 ميجابايت' : 'File exceeds maximum 25MB limit');
        return;
      }
      setFormData((prev) => ({
        ...prev,
        attachedFile: {
          name: file.name,
          size: (file.size / 1024).toFixed(1) + ' KB',
          type: file.type || 'Document'
        }
      }));
    }
  };

  const handleRemoveFile = () => {
    setFormData((prev) => ({ ...prev, attachedFile: null }));
  };

  const validateStep = (step) => {
    if (step === 1) {
      if (!formData.pillar) {
        setFormError(lang === 'ar' ? 'يرجى تحديد المحور الأساسي' : 'Please select a primary operational pillar');
        return false;
      }
      return true;
    }
    if (step === 2) {
      if (!formData.location || !formData.facilityType) {
        setFormError(lang === 'ar' ? 'يرجى استكمال بيانات الموقع وتصنيف المنشأة' : 'Please select site location and facility type');
        return false;
      }
      return true;
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setFormError('');
      setCurrentStep((s) => Math.min(s + 1, 3));
    }
  };

  const prevStep = () => {
    setFormError('');
    setCurrentStep((s) => Math.max(s - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setFormError(lang === 'ar' ? 'يرجى ملء جميع الحقول المطلوبة للتواصل' : 'Please complete all required contact fields');
      return;
    }

    setIsSubmitting(true);
    setFormError('');

    // Simulate asynchronous enterprise dispatch
    setTimeout(() => {
      const generatedRef = `RFP-TSI-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setReferenceCode(generatedRef);
      setSubmittedData({ ...formData });
      setIsSubmitting(false);
    }, 900);
  };

  const resetForm = () => {
    setSubmittedData(null);
    setReferenceCode('');
    setCurrentStep(1);
    setFormData({
      pillar: 'infrastructure',
      subModules: [],
      location: t.rfp.form.locations[0],
      facilityType: t.rfp.form.facilityTypes[0],
      timeline: t.rfp.form.timelines[0],
      name: '',
      company: '',
      email: '',
      phone: '',
      notes: '',
      attachedFile: null,
    });
  };

  const getWhatsAppMessage = () => {
    const text = lang === 'ar'
      ? `تحية طيبة، لقد قمت بتقديم طلب عرض فني لدى شركة الابتكار الذكي برمز مرجعي (${referenceCode}). المحور: ${formData.pillar}. الموقع: ${formData.location}. اسم الشركة: ${formData.company}. أرجو التنسيق مع المهندس المسؤول.`
      : `Hello, I have submitted an enterprise RFP specification with The Smart Innovation. Reference Code: ${referenceCode}. Primary Pillar: ${formData.pillar}. Location: ${formData.location}. Company: ${formData.company}. Please coordinate with our procurement officer.`;
    return `https://wa.me/9647860808090?text=${encodeURIComponent(text)}`;
  };

  const currentModuleList = availableModules[formData.pillar] || availableModules.infrastructure;

  return (
    <section className="section section-rfp" id="rfp">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-label">
            <Building2 size={16} />
            {t.rfp.badge}
          </span>
          <h2>{t.rfp.title}</h2>
          <p className="section-lead">{t.rfp.subtitle}</p>
        </div>

        <div className="rfp-main-layout">
          {/* Main RFP Form / Wizard Container */}
          <div className="rfp-form-container">
            {submittedData ? (
              /* Success State Card */
              <div className="rfp-success-panel" role="status">
                <div className="success-icon-badge">
                  <CheckCircle2 size={48} className="text-cyan" />
                </div>
                <h3>{t.rfp.form.successTitle}</h3>
                <div className="rfp-ref-code-box">
                  <span className="ref-label">{t.rfp.form.successRef}</span>
                  <span className="ref-code">{referenceCode}</span>
                </div>
                <p className="success-lead-msg">{t.rfp.form.successMsg}</p>

                <div className="rfp-summary-box">
                  <h4>{t.rfp.form.successDetails}</h4>
                  <div className="summary-grid">
                    <div>
                      <span className="sum-label">{lang === 'ar' ? 'المحور التقني:' : 'Operational Pillar:'}</span>
                      <span className="sum-val">{formData.pillar.toUpperCase()}</span>
                    </div>
                    <div>
                      <span className="sum-label">{lang === 'ar' ? 'الموقع والتصنيف:' : 'Location & Facility:'}</span>
                      <span className="sum-val">{formData.location}</span>
                    </div>
                    <div>
                      <span className="sum-label">{lang === 'ar' ? 'المسؤول والمؤسسة:' : 'Lead Contact & Org:'}</span>
                      <span className="sum-val">{formData.name} · {formData.company || 'Enterprise'}</span>
                    </div>
                    <div>
                      <span className="sum-label">{lang === 'ar' ? 'المرفقات الفنية:' : 'Attached Specs:'}</span>
                      <span className="sum-val">{formData.attachedFile ? formData.attachedFile.name : (lang === 'ar' ? 'لا توجد مرفقات' : 'None attached')}</span>
                    </div>
                  </div>
                </div>

                <div className="success-actions-row">
                  <a
                    href={getWhatsAppMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                  >
                    <MessageSquare size={16} />
                    <span>{t.rfp.form.whatsappSend}</span>
                  </a>
                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={resetForm}
                  >
                    {t.rfp.form.resetButton}
                  </button>
                </div>
              </div>
            ) : (
              /* Multi-Step Wizard */
              <div className="rfp-wizard-card">
                {/* Stepper Indicator */}
                <div className="rfp-stepper-bar">
                  <div className={`step-item ${currentStep >= 1 ? 'active' : ''} ${currentStep > 1 ? 'completed' : ''}`}>
                    <span className="step-num">{currentStep > 1 ? '✓' : '1'}</span>
                    <span className="step-label">{t.rfp.steps.step1}</span>
                  </div>
                  <div className="step-divider"></div>
                  <div className={`step-item ${currentStep >= 2 ? 'active' : ''} ${currentStep > 2 ? 'completed' : ''}`}>
                    <span className="step-num">{currentStep > 2 ? '✓' : '2'}</span>
                    <span className="step-label">{t.rfp.steps.step2}</span>
                  </div>
                  <div className="step-divider"></div>
                  <div className={`step-item ${currentStep === 3 ? 'active' : ''}`}>
                    <span className="step-num">3</span>
                    <span className="step-label">{t.rfp.steps.step3}</span>
                  </div>
                </div>

                {formError && (
                  <div className="rfp-error-banner" role="alert">
                    <AlertCircle size={16} />
                    <span>{formError}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="rfp-form-body">
                  {/* STEP 1: Project Scope */}
                  {currentStep === 1 && (
                    <div className="rfp-step-content">
                      <div className="form-group">
                        <label className="field-label">{t.rfp.form.pillarLabel}</label>
                        <div className="pillar-radio-grid">
                          <label className={`pillar-radio-option ${formData.pillar === 'infrastructure' ? 'selected' : ''}`}>
                            <input
                              type="radio"
                              name="pillar"
                              value="infrastructure"
                              checked={formData.pillar === 'infrastructure'}
                              onChange={handleInputChange}
                            />
                            <div className="radio-text">
                              <strong>{lang === 'ar' ? 'البنية التحتية الحيوية ومراكز البيانات' : 'Critical Infrastructure & Power Systems'}</strong>
                              <span>{lang === 'ar' ? 'قاعات خوادم TIA-942، ألياف ضوئية، مايكرويف، مولدات و UPS' : 'TIA-942 Data Centers, Armored Fiber, Microwave & Industrial UPS'}</span>
                            </div>
                          </label>

                          <label className={`pillar-radio-option ${formData.pillar === 'security' ? 'selected' : ''}`}>
                            <input
                              type="radio"
                              name="pillar"
                              value="security"
                              checked={formData.pillar === 'security'}
                              onChange={handleInputChange}
                            />
                            <div className="radio-text">
                              <strong>{lang === 'ar' ? 'الأمن الفيزيائي وحماية المحيط' : 'Physical & Facility Security Automation'}</strong>
                              <span>{lang === 'ar' ? 'بوابات ومصدات هيدروليكية، كاميرات حرارية، تمييز اللوحات ALPR' : 'Crash Gates, Thermal CCTV, ALPR & Biometric Access Control'}</span>
                            </div>
                          </label>

                          <label className={`pillar-radio-option ${formData.pillar === 'cyber_ai' ? 'selected' : ''}`}>
                            <input
                              type="radio"
                              name="pillar"
                              value="cyber_ai"
                              checked={formData.pillar === 'cyber_ai'}
                              onChange={handleInputChange}
                            />
                            <div className="radio-text">
                              <strong>{lang === 'ar' ? 'الدفاع السيبراني والذكاء الاصطناعي' : 'Cyber Defense & Operational AI Tooling'}</strong>
                              <span>{lang === 'ar' ? 'مركز عمليات أمنية SOC، حماية سكادا الصناعية IEC 62443، برمجيات مخصصة' : '24/7 SOC, Industrial SCADA Air-Gap & Operational Vision AI'}</span>
                            </div>
                          </label>

                          <label className={`pillar-radio-option ${formData.pillar === 'oilfield' ? 'selected' : ''}`}>
                            <input
                              type="radio"
                              name="pillar"
                              value="oilfield"
                              checked={formData.pillar === 'oilfield'}
                              onChange={handleInputChange}
                            />
                            <div className="radio-text">
                              <strong>{lang === 'ar' ? 'حلول الحقول النفطية والمواقع النائية' : 'Oil Field & Remote Concession Deployment'}</strong>
                              <span>{lang === 'ar' ? 'تجهيزات معتمدة ATEX Zone 1/2، مقاومة الحرارة 65 مئوية، ربط ستالايت هجين' : 'ATEX Zone 1/2 Certified, 65°C Heat Resistance & Satellite Failover'}</span>
                            </div>
                          </label>
                        </div>
                      </div>

                      {/* Sub-modules multi-select */}
                      <div className="form-group">
                        <label className="field-label">{t.rfp.form.subServicesLabel}</label>
                        <div className="submodules-checklist">
                          {currentModuleList.map((item, index) => {
                            const isChecked = formData.subModules.includes(item);
                            return (
                              <label key={index} className={`check-chip ${isChecked ? 'checked' : ''}`}>
                                <input
                                  type="checkbox"
                                  checked={isChecked}
                                  onChange={() => handleSubModuleToggle(item)}
                                />
                                <span>{item}</span>
                              </label>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 2: Site Specifications & Logistics */}
                  {currentStep === 2 && (
                    <div className="rfp-step-content">
                      <div className="form-grid-2">
                        <div className="form-group">
                          <label className="field-label" htmlFor="locationSelect">
                            <MapPin size={14} className="text-cyan inline mr-1" />
                            {t.rfp.form.locationLabel}
                          </label>
                          <select
                            id="locationSelect"
                            name="location"
                            value={formData.location}
                            onChange={handleInputChange}
                            className="select-control"
                          >
                            {t.rfp.form.locations.map((loc, i) => (
                              <option key={i} value={loc}>{loc}</option>
                            ))}
                          </select>
                        </div>

                        <div className="form-group">
                          <label className="field-label" htmlFor="facilitySelect">
                            <Building2 size={14} className="text-cyan inline mr-1" />
                            {t.rfp.form.facilityTypeLabel}
                          </label>
                          <select
                            id="facilitySelect"
                            name="facilityType"
                            value={formData.facilityType}
                            onChange={handleInputChange}
                            className="select-control"
                          >
                            {t.rfp.form.facilityTypes.map((fac, i) => (
                              <option key={i} value={fac}>{fac}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="form-group">
                        <label className="field-label" htmlFor="timelineSelect">
                          <Clock size={14} className="text-cyan inline mr-1" />
                          {t.rfp.form.timelineLabel}
                        </label>
                        <select
                          id="timelineSelect"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="select-control"
                        >
                          {t.rfp.form.timelines.map((time, i) => (
                            <option key={i} value={time}>{time}</option>
                          ))}
                        </select>
                      </div>

                      <div className="form-group">
                        <label className="field-label" htmlFor="notesText">
                          <FileText size={14} className="text-cyan inline mr-1" />
                          {t.rfp.form.notesLabel}
                        </label>
                        <textarea
                          id="notesText"
                          name="notes"
                          rows="4"
                          value={formData.notes}
                          onChange={handleInputChange}
                          className="textarea-control"
                          placeholder={t.rfp.form.notesPlaceholder}
                        ></textarea>
                      </div>
                    </div>
                  )}

                  {/* STEP 3: Technical Specs, Spec Sheet Upload & Verified Contact */}
                  {currentStep === 3 && (
                    <div className="rfp-step-content">
                      {/* Document / BOQ Upload simulation */}
                      <div className="form-group">
                        <label className="field-label">{t.rfp.form.fileLabel}</label>
                        {formData.attachedFile ? (
                          <div className="attached-file-badge">
                            <div className="file-info-group">
                              <FileText size={20} className="text-cyan" />
                              <div>
                                <span className="attached-filename">{formData.attachedFile.name}</span>
                                <span className="attached-filesize text-muted">({formData.attachedFile.size})</span>
                              </div>
                            </div>
                            <button
                              type="button"
                              className="btn-icon-remove"
                              onClick={handleRemoveFile}
                              aria-label="Remove attachment"
                            >
                              <X size={16} />
                            </button>
                          </div>
                        ) : (
                          <div className="upload-dropzone">
                            <input
                              type="file"
                              id="rfpFileUpload"
                              onChange={handleFileChange}
                              className="file-input-hidden"
                              accept=".pdf,.docx,.xlsx,.dwg,.zip,.png,.jpg"
                            />
                            <label htmlFor="rfpFileUpload" className="upload-label">
                              <UploadCloud size={28} className="text-cyan" />
                              <span className="upload-main-text">
                                {lang === 'ar' ? 'انقر لرفع ملف جدول الكميات (BOQ) أو المخطط' : 'Click to select project specification or BOQ file'}
                              </span>
                              <span className="upload-sub-text">{t.rfp.form.fileHint}</span>
                            </label>
                          </div>
                        )}
                      </div>

                      {/* Contact fields */}
                      <div className="form-grid-2">
                        <div className="form-group">
                          <label className="field-label" htmlFor="nameInput">{t.rfp.form.nameLabel}</label>
                          <input
                            type="text"
                            id="nameInput"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder={t.rfp.form.namePlaceholder}
                            className="input-control"
                          />
                        </div>

                        <div className="form-group">
                          <label className="field-label" htmlFor="companyInput">{t.rfp.form.companyLabel}</label>
                          <input
                            type="text"
                            id="companyInput"
                            name="company"
                            required
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder={t.rfp.form.companyPlaceholder}
                            className="input-control"
                          />
                        </div>
                      </div>

                      <div className="form-grid-2">
                        <div className="form-group">
                          <label className="field-label" htmlFor="emailInput">{t.rfp.form.emailLabel}</label>
                          <input
                            type="email"
                            id="emailInput"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder={t.rfp.form.emailPlaceholder}
                            className="input-control"
                          />
                        </div>

                        <div className="form-group">
                          <label className="field-label" htmlFor="phoneInput">{t.rfp.form.phoneLabel}</label>
                          <input
                            type="tel"
                            id="phoneInput"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder={t.rfp.form.phonePlaceholder}
                            className="input-control"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Form Navigation Controls */}
                  <div className="rfp-nav-row">
                    {currentStep > 1 && (
                      <button
                        type="button"
                        className="btn btn-outline"
                        onClick={prevStep}
                        disabled={isSubmitting}
                      >
                        <ArrowLeft size={16} />
                        <span>{lang === 'ar' ? 'السابق' : 'Previous Step'}</span>
                      </button>
                    )}

                    <div className="ms-auto flex items-center gap-3">
                      {currentStep < 3 ? (
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={nextStep}
                        >
                          <span>{lang === 'ar' ? 'التالي' : 'Continue to Next Step'}</span>
                          <ArrowRight size={16} />
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className="btn btn-primary"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <span>{t.rfp.form.submitting}</span>
                          ) : (
                            <>
                              <Send size={16} />
                              <span>{t.rfp.form.submitButton}</span>
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* Escalation Channels & Direct Technical Desk Sidebar */}
          <div className="rfp-escalation-sidebar">
            <div className="escalation-card">
              <h3 className="escalation-title">{t.rfp.escalation.title}</h3>
              <p className="escalation-lead text-muted">
                {t.rfp.directCallNotice}
              </p>

              {/* SLA Guarantee Badge */}
              <div className="sla-badge-box">
                <Clock size={18} className="text-cyan flex-shrink-0" />
                <span>{t.rfp.escalation.slaGuarantee}</span>
              </div>

              {/* Direct WhatsApp Quick-Link */}
              <a
                href="https://wa.me/9647860808090"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-full"
              >
                <MessageSquare size={18} />
                <span>WhatsApp Engineering Desk</span>
              </a>

              {/* Operating Hubs */}
              <div className="escalation-hub">
                <div className="hub-header">
                  <MapPin size={16} className="text-cyan" />
                  <h4>{t.rfp.escalation.baghdadHq}</h4>
                </div>
                <p className="hub-address">{t.rfp.escalation.baghdadAddress}</p>
                <div className="hub-contacts">
                  <a href="tel:+9647860808090" className="hub-phone">
                    <Phone size={14} />
                    <span>+964 786 080 8090</span>
                  </a>
                  <a href="mailto:info@thesmartinnovation.com" className="hub-email">
                    <Mail size={14} />
                    <span>info@thesmartinnovation.com</span>
                  </a>
                </div>
              </div>

              <div className="escalation-hub">
                <div className="hub-header">
                  <MapPin size={16} className="text-cyan" />
                  <h4>{t.rfp.escalation.basraHub}</h4>
                </div>
                <p className="hub-address">{t.rfp.escalation.basraAddress}</p>
                <div className="hub-contacts">
                  <a href="tel:+9647860808090" className="hub-phone">
                    <Phone size={14} />
                    <span>+964 786 080 8090</span>
                  </a>
                  <a href="mailto:rfp@thesmartinnovation.com" className="hub-email">
                    <Mail size={14} />
                    <span>rfp@thesmartinnovation.com</span>
                  </a>
                </div>
              </div>

              <div className="escalation-hours">
                <span className="hours-label">{lang === 'ar' ? 'ساعات العمل والمناوبة:' : 'Operational Hours:'}</span>
                <p>{t.rfp.escalation.hours}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
