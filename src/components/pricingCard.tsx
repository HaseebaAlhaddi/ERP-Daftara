"use client"

import React, { useState, useEffect } from "react"
import { Check, X, Info, X as CloseIcon } from "lucide-react"

const plans = [
  {
    name: "الأساسية",
    price: "£20.00",
    period: "/شهرياً",
    description: "يدفع 240£ سنوياً",
    popular: false,
  },
  {
    name: "المتقدمة",
    price: "£41.25",
    period: "/شهرياً",
    description: "يدفع 495£ سنوياً",
    popular: false,
  },
  {
    name: "الشاملة",
    price: "£50.00",
    period: "/شهرياً",
    description: "يدفع 600£ سنوياً",
    popular: true,
  },
]

// data/features.ts
export const featureGroups: { groupTitle: string; features: Feature[] }[] = [
  {
    groupTitle: "إدارة المبيعات",
    features: [
      { feature: "الفاتورة الإلكترونية", basic: true, advanced: true, professional: true },
      { 
        feature: "نقاط بيع سحابية", 
        basic: "غير محدود", 
        advanced: "غير محدود", 
        professional: "غير محدود", 
        info: true,
        infoContent: {
          title: "نقاط بيع سحابية",
          description: "نظام نقاط البيع السحابية يسمح لك بإدارة عمليات البيع من أي مكان. قم بتسجيل المبيعات، إدارة المخزون، وتتبع التقارير في الوقت الفعلي مع إمكانية الوصول من أي جهاز."
        }
      },
      { feature: "تقارير المبيعات", basic: true, advanced: true, professional: true },
      { feature: "العروض على المبيعات", basic: false, advanced: true, professional: true },
      { feature: "نقاط الولاء", basic: false, advanced: false, professional: true },
      { feature: "نقاط بيع بدون أنترنت", basic: false, advanced: false, professional: 1 },
    ],
  },
  {
    groupTitle: "إدارة علاقات العملاء",
    features: [
      { 
        feature: "متابعة العملاء", 
        basic: true, 
        advanced: true, 
        professional: true,
        info: true,
        infoContent: {
          title: "متابعة العملاء",
          description: "تابع عملاءك من مكان واحد. حمل المستندات، حدد المواعيد، أضف الملاحظات، ونظم المهام في مكان واحد. للحفاظ على علاقات قوية وإتمام الصفقات بفعالية."
        }
      },
      { feature: "إدارة العضويات", basic: false, advanced: true, professional: true },
      { feature: "ربط SMS", basic: false, advanced: false, professional: true },
      { feature: "العملاء", basic: 100, advanced: 300, professional: "غير محدود" },
    ],
  },
]

// Type definition for feature items
interface Feature {
  feature: string
  basic: boolean | string | number
  advanced: boolean | string | number
  professional: boolean | string | number
  info?: boolean
  infoContent?: {
  title: string
    description: string
  }
}


// Info Popup Component
interface InfoPopupProps {
  isOpen: boolean
  onClose: () => void
  title: string
  description: string
  position: { x: number; y: number }
}

function InfoPopup({ isOpen, onClose, title, description, position }: InfoPopupProps) {
  if (!isOpen) return null

  return (
    <div 
      className="info-popup fixed z-50 bg-gray-900 text-white rounded-lg shadow-2xl max-w-sm p-6 border border-gray-700"
      style={{
        left: Math.min(position.x - 200, window.innerWidth - 320),
        top: Math.max(position.y - 100, 20)
      }}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-3 left-3 text-white hover:text-gray-300 transition-colors z-10"
      >
        <CloseIcon className="w-5 h-5" />
      </button>
      
      {/* Content */}
      <div className="pr-6">
        <h3 className="text-lg font-bold mb-3 text-white">
          {title}
        </h3>
        <p className="text-sm text-gray-200 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}

// Helper function to render feature cells
function renderFeatureCell(value: boolean | string | number) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="w-4 h-4 md:w-5 md:h-5 text-green-600 mx-auto" />
    ) : (
      <X className="w-4 h-4 md:w-5 md:h-5 text-gray-300 mx-auto" />
    )
  }
  
  // For strings and numbers, display as text
  return (
    <span className="text-xs md:text-sm text-gray-700 font-medium">
      {value}
    </span>
  )
}

export function PricingCard() {
  const [popupState, setPopupState] = useState<{
    isOpen: boolean
    title: string
    description: string
    position: { x: number; y: number }
  }>({
    isOpen: false,
    title: "",
    description: "",
    position: { x: 0, y: 0 }
  })

  const handleInfoClick = (event: React.MouseEvent, feature: Feature) => {
    event.stopPropagation()
    if (feature.infoContent) {
      setPopupState({
        isOpen: true,
        title: feature.infoContent.title,
        description: feature.infoContent.description,
        position: { x: event.clientX, y: event.clientY }
      })
    }
  }

  const closePopup = () => {
    setPopupState(prev => ({ ...prev, isOpen: false }))
  }

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupState.isOpen) {
        const target = event.target as HTMLElement
        if (!target.closest('.info-popup')) {
          closePopup()
        }
      }
    }

    if (popupState.isOpen) {
      document.addEventListener('click', handleClickOutside)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [popupState.isOpen])

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50">
      {/* Plans */}
      <section className="flex flex-col md:flex-row justify-center gap-6 px-4 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex-1 p-6 rounded-2xl border shadow-sm bg-white transition-transform hover:scale-105 ${
              plan.popular ? "border-green-600 bg-green-50" : ""
            }`}
          >
            {plan.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs px-3 py-1 rounded-full">
                الأكثر شيوعاً
              </span>
            )}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{plan.name}</h3>
            <div className="text-4xl font-bold text-gray-900">
              {plan.price}
              <span className="text-sm text-gray-500">{plan.period}</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">{plan.description}</p>

            <button
              className={`w-full mt-6 py-2 rounded-lg font-medium ${
                plan.popular
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "bg-gray-800 text-white hover:bg-gray-900"
              }`}
            >
              اختر الخطة
            </button>
          </div>
        ))}
      </section>

      <div className="w-full max-w-6xl mx-auto my-10">
        {/* Mobile-friendly table container with horizontal scroll */}
        <div className="overflow-x-auto mx-4 md:mx-0">
          <div className="min-w-[800px] md:min-w-0">
            <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden bg-white shadow-lg">
          {/* Table Header */}
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-3 md:px-6 py-3 md:py-4 text-right font-bold text-gray-800 text-sm md:text-base">
                الميزات
              </th>
              <th className="border border-gray-300 px-3 md:px-6 py-3 md:py-4 text-center font-bold text-gray-800 text-sm md:text-base">
                الأساسية
              </th>
              <th className="border border-gray-300 px-3 md:px-6 py-3 md:py-4 text-center font-bold text-gray-800 text-sm md:text-base">
                المتقدمة
              </th>
              <th className="border border-gray-300 px-3 md:px-6 py-3 md:py-4 text-center font-bold text-gray-800 text-sm md:text-base">
                الاحترافية
              </th>
            </tr>
          </thead>
          
          {/* Table Body */}
          <tbody>
            {featureGroups.map((group, groupIndex) => (
              <React.Fragment key={groupIndex}>
                {/* Group Title Row */}
                <tr className="bg-gray-50">
                  <td 
                    colSpan={4} 
                    className="border border-gray-300 px-3 md:px-6 py-3 text-right font-semibold text-gray-800 bg-gray-50 text-sm md:text-base"
                  >
                    {group.groupTitle}
                  </td>
                </tr>
                
                {/* Feature Rows */}
                {group.features.map((feature, featureIndex) => (
                  <tr key={featureIndex} className="hover:bg-gray-50">
                    {/* Feature Name */}
                    <td className="border border-gray-300 px-3 md:px-6 py-3 md:py-4 text-right">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm md:text-base">{feature.feature}</span>
                        {feature.info && (
                          <button
                            onClick={(e) => handleInfoClick(e, feature)}
                            className="text-blue-500 hover:text-blue-700 transition-colors cursor-pointer flex-shrink-0"
                            title="معلومات إضافية"
                          >
                            <Info className="w-3 h-3 md:w-4 md:h-4" />
                          </button>
                        )}
                      </div>
                    </td>
                    
                    {/* Basic Plan */}
                    <td className="border border-gray-300 px-3 md:px-6 py-3 md:py-4 text-center">
                      {renderFeatureCell(feature.basic)}
                    </td>
                    
                    {/* Advanced Plan */}
                    <td className="border border-gray-300 px-3 md:px-6 py-3 md:py-4 text-center">
                      {renderFeatureCell(feature.advanced)}
                    </td>
                    
                    {/* Professional Plan */}
                    <td className="border border-gray-300 px-3 md:px-6 py-3 md:py-4 text-center">
                      {renderFeatureCell(feature.professional)}
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Info Popup */}
      <InfoPopup
        isOpen={popupState.isOpen}
        onClose={closePopup}
        title={popupState.title}
        description={popupState.description}
        position={popupState.position}
      />
    </div>
  )
}
